import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Challenges.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdowmProvider } from "../contexts/CountdowmContext";
import React from "react";
import { ChallengesProvider } from "../contexts/ChallengeContext";

interface HomeProps{
  email: string;
  level: number;
  currentExperience : number;
  challengesCompleted : number;
}


function Challenges(props:HomeProps){
    return (
    <ChallengesProvider 
        level ={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdowmProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdowmProvider>
      </div>
    </ChallengesProvider>)
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
    return {
      props: { 
        level: Number(level), 
        currentExperience : Number(currentExperience), 
        challengesCompleted : Number(challengesCompleted)}
    };
  };
  
  export default Challenges;