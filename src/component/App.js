import React, { useState, useEffect } from 'react';
import Login from './Auth/Login'
import Register from './Auth/Register'
import {loginService} from '../services/Auth/Login'
import {registerService} from '../services/Auth/Register'

const App =()=> {

  const [login, setLogin]= useState('false')
  const [userLogin, setUserLogin]=useState();
  const [register, setRegister]= useState('false')

  /////// Vistas //////////
  const registerView=()=>{
    setRegister('true')
  }
  const returnLogin=()=>{
    setRegister('false')
  }

  ////// auth ///////
  const loginUser =(user)=>{
    loginService(user).then(response => {
      if(response){
        setUserLogin(response)
        setLogin('true')
      }else{
        alert('Usario o Contraseña incorrecta')
      }
    })    
  }
  const registerUser =(user)=>{
    registerService(user)
      .then(
        setRegister('false')
      )
    alert('Registro correcto! ahora ingrese')   
  }

  if(login==='true'){
    return (
      
      <div className="container">
        <p>estas logeado</p>
      </div>
    );
  }else if(register==='false'){
    return (
      <div className="container">
        <Login loginUser={loginUser} register={registerView} />
      </div>
    );
  }else if(register==='true'){
    return (
      <div className="container">
        <Register registerUser={registerUser} returnLogin = {returnLogin}/> 
      </div>
    )
  }
  
}


export default App;
