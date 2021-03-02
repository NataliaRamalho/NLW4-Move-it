import { useContext } from "react";
import { CountdowmContext } from "../contexts/CountdowmContext";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {

  const { minutes, seconds, hasFinished,isActive, time,
    startCountdown, resetCountdown} = useContext(CountdowmContext);

  const percentToComplet = 100 - Math.round(time * 100)/(0.05*60);
 

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span> {minuteLeft}</span>
          <span> {minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span> {secondLeft}</span>
          <span> {secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <div>
          <button disabled type="button" className={styles.countdownButton}>
            Ciclo encerrado
          </button>
          <div className={styles.complet}></div>
          
        </div>
        
      ) : (
        <>
          {isActive ? (
            <div className="leaveButton">
              <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
             </button>
             <div className={styles.progress}>
              <div style={{width: `${percentToComplet}%` }}></div>
             </div>
            </div>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
