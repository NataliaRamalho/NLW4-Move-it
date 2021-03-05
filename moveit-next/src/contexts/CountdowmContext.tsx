import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdowmContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  time: number;
  newTime:number;
  addTime: () => void;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdowmContext = createContext({} as CountdowmContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdowmProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext);
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [newTime, setNewTime] = useState(time);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(newTime);
    setHasFinished(false);
  }
  function addTime() {
    if (time <= 55 * 60) {
      setTime(time + 5 * 60);
      setNewTime(time + 5 * 60);
    } else {
      setTime(15 * 60);
      setNewTime(15 * 60);
    }
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

  return (
    <CountdowmContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        time,
        newTime,
        addTime,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdowmContext.Provider>
  );
}
