import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";


interface CountdowmContextData {
    minutes: number; 
    seconds: number;  
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps{
    children: ReactNode;
}

export const CountdowmContext = createContext ({} as CountdowmContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdowmProvider({children} :  CountdownProviderProps){
    const {startNewChallenge} = useContext(ChallengeContext);
    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
  
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
      }

    function resetCountdown() {
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(0.05 * 60);
      setHasFinished(false);
    }


      useEffect(() => {
        if (isActive && time > 0) {
          countdownTimeout = setTimeout(() => {
            setTime(time - 1);
          }, 1000);
        } else if (isActive && time === 0) {
          setHasFinished(true);
          setIsActive(false);
          startNewChallenge();
        }
      }, [isActive, time]);
  

    return(
      <CountdowmContext.Provider value={{
          minutes, 
          seconds, 
          hasFinished,
          isActive,
          startCountdown,
          resetCountdown
      }}>
          {children}
      </CountdowmContext.Provider>
    )
}