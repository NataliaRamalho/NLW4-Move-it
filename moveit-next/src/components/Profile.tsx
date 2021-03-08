import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'



export function Profile(){
    const router = useRouter()
    const { email } = router.query;
    const {level} = useContext(ChallengeContext)
    return(
       <div className={styles.profileContainer}>
            <div>
                <strong>  {email} </strong>
                <p> 
                    <img src="icons/level.svg" alt="Level"/>
                    <span>Level {level}</span> 
                </p>
            </div>
       </div>
    )
}