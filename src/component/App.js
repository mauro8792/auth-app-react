import React, { useState, useEffect } from 'react';
import Login from './Auth/Login'
import Register from './Auth/Register'
import ResetPassword from './Auth/ResetPassword'
import Nav from './Nav'
import TableUsers from './TableUsers'
import {loginService} from '../services/Auth/Login'
import {registerService} from '../services/Auth/Register'
import {getTodosUsers} from '../services/UserService'

const App =()=> {

  const [login, setLogin]= useState('false')
  const [userLogin, setUserLogin]=useState();
  const [register, setRegister]= useState('false')
  const [resetPasswordState, setResetPasswordState] = useState('false')
  const [viewUser, setViewUser]= useState('true')
  const [users, setUsers]= useState()
  const [token, setToken]=useState()
  


  /////// Vistas //////////
  const registerView=()=>{
    setRegister('true')
  }
  const returnLogin=()=>{
    setRegister('false')
    setResetPasswordState('false')
  }
  const resetPassword =()=>{
    setRegister('false')
    setResetPasswordState('true')
  }
  const showUser = ()=>{  
    setViewUser('true');
  }


  ////// auth ///////
  const loginUser = async (user)=>{
    let data = await loginService(user)
    let token1 = await (data.token);
    let user1 = await data.user
    setToken(token1);
    setUserLogin(user1);

    let dataUsers = await getTodosUsers(token1);
    let usersAll = await dataUsers.users;
    setUsers(usersAll);
    
    setLogin('true')  
  }
  const registerUser =(user)=>{
    registerService(user)
      .then(
        setRegister('false')
      )
    alert('Registro correcto! ahora ingrese')   
  }
  const resetPassUser = (nameUser)=>{
    console.log('nameuser', nameUser);    
  }

  //llamada a los servicios///
   

  if(login==='true'){
    if (viewUser==='true') {
      return (      
        <div className="container">
          <Nav showUser={showUser} userLogin={userLogin}/>
          <div className="row " style={{'marginTop': '10%'}}>
            
             <TableUsers  users={users}   /> 
          </div>
        </div>
      )
    }else{
      console.log('chau');
        return (      
        <div className="container">
          <Nav showUser={showUser} userLogin={userLogin}/>
          <p >estas logeadoooooo</p>
        </div>
      );
    }
  }else if(register==='false'){
    if(resetPasswordState==='false'){
      return (
        <div className="container">
          <Login loginUser={loginUser} register={registerView} resetPassword={resetPassword}/>
        </div>
      );
    }else{
      return (
        <div className="container">
          <ResetPassword resetPassUser={resetPassUser} returnLogin = {returnLogin} />
        </div>
      );
    }
  }else if(register==='true'){
    return (
      <div className="container">
        <Register registerUser={registerUser} returnLogin = {returnLogin}/> 
      </div>
    )
  }
  
  
}


export default App;
