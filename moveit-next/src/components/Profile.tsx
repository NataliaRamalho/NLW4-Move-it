import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengeContext);

    return(
       <div className={styles.profileContainer}>
           <img src="https://github.com/NataliaRamalho.png" alt="Avatar"/>
            <div>
                <strong>Natália</strong>
                <p> 
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
       </div>
    )
}