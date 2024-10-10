import React from 'react'
import styles from './myforms.module.css'

function MyForms() {
  return (
    <div className={styles.teste}>
       <h1>Componente My forms</h1>
       <form>
         <div>

            <label htmlFor="name"></label>
            <input type="text"  name='name' placeholder='digite seu nome'/>
         </div>
         <input type="submit" value='Enviar' />

       </form>
        
        </div>
  )
}

export default MyForms