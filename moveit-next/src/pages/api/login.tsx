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
    const user = await db
      .collection("users")
      .findOne({ email: email, password: password });
  
    if (!user) {
      return response.status(404).json({ error: "usuario não encontrado" });
    }
    return response.status(200).json(user);
}
