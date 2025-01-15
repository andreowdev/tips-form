import React from 'react';

export default function Form(props) {

  return (
         <form className='form'>
            <h1>{props.useRegister ? "Faça Login" : "Se Registre"}</h1>
            <input type="text" placeholder='Digite seu usuário!' />
            <input type='password'  placeholder='Digite sua senha!' />
            {
              props.useRegister ? null : 
              <input type="password" placeholder='Digite sua senha Novamente' />
            }
            <button type='submit'>{props.useRegister ? "Login" : "Register"}</button>  
         </form>
  )
}
