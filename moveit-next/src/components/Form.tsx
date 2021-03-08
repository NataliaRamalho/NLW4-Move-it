import { FormEvent, useState } from "react";
import styles from "../styles/components/Form.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMenssage, setErrorMenssage] = useState("");
  const { push } = useRouter();

  function login(event : FormEvent) {
    event.preventDefault();
    setErrorMenssage('')
    if (password != "" && email != "" && email.includes('@')) {
      axios
        .post("/api/login", { email, password })
        .then(() => {
          push(`/${email}`);
        })
        .catch(() =>
          setErrorMenssage("Usuário não encontrado, verifique os dados")
        );
    }
    else{
      setErrorMenssage('Voce deve preencher todos os campos')
    }
  }
  function register(event : FormEvent) {
    event.preventDefault();
    setErrorMenssage('')
    if (password != "" && email != "" && email.includes('@')) {
      axios
        .post("/api/register", { email, password })
        .then(() => {
          push(`/${email}`);
        })
        .catch(() => setErrorMenssage("Usuário já cadastrado"));
    } else{
      setErrorMenssage('Voce deve preencher todos os campos')
    }
  }
  return (
    <form className={styles.containerForm}>
      <div>
        <h1>Bem-vindo</h1>
      </div>
      <input
        type="email"
        name="e-mail"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{errorMenssage}</p>
      <button type="submit" name="buttonLogin" onClick={login}>
        Entrar
      </button>
      <button
        type="submit"
        name="buttonRegister"
        onClick={register}
        className={styles.buttonRegister}
      >
        Cadastrar
      </button>
    </form>
  );
}
