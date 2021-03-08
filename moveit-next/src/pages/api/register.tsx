import { NowRequest, NowResponse } from "@vercel/node";
import { Db, MongoClient } from "mongodb";
import url from "url";

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (request: NowRequest, response: NowResponse) => {
  const { email, password } = request.body;
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const users = await db.collection("users").findOne({ email: email });
  if (users) {
    return response.status(400).json({ error: "usuario já cadastrado" });
  }
  const collection = db.collection("users");
  await collection.insertOne({
    email,
    password,
    level: 1, 
    currentExperience: 0, 
    challengesCompleted:0 
  });
  return response.status(201).json({ ok: true });
};
