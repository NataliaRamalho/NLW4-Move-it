import styles from '../styles/components/Form.module.css'

export function Form(){

    return(
       <form className={styles.containerForm}> 
           <div> <h1>Bem-vindo</h1> </div>
           <input type="email" name="e-mail" placeholder="Digite seu e-mail"/>
           <input type="password" name="password" placeholder="Digite sua senha" />
           <button type="submit">Entrar</button>
       </form>
    )
}