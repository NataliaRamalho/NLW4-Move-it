import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
       <div className={styles.profileContainer}>
           <img src="https://github.com/NataliaRamalho.png" alt="Avatar"/>
            <div>
                <strong>Natália</strong>
                <p> 
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>
            </div>
       </div>
    )
}