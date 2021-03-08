import Head from "next/head";
import React from "react";
import styles from "../styles/pages/Login.module.css";
import { Form } from "../components/Form";

export default function Home() {
  return (
    <div className={styles.containerLogin}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.containerPart1}></div>
        <div className={styles.containerPart2}>
          <div className={styles.logo}>
            <img src="/logo.svg" />
          </div>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}
