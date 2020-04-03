import React, { useState, useEffect } from 'react';
import Login from './Auth/Login'
import Register from './Auth/Register'
import ResetPassword from './Auth/ResetPassword'
import FormResetPass from './Auth/FormResetPass'
import Nav from './Nav'
import TableUsers from './TableUsers'
import {loginService, resetPass, changePass} from '../services/Auth/Login'
import {registerService} from '../services/Auth/Register'
import {getTodosUsers} from '../services/UserService'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App =()=> {

  const [login, setLogin]= useState('false')
  const [userLogin, setUserLogin]=useState();
  const [register, setRegister]= useState('false')
  const [resetPasswordState, setResetPasswordState] = useState('false')
  const [viewUser, setViewUser]= useState('true')
  const [users, setUsers]= useState()
  const [token, setToken]=useState()
  const [home, setHome]=useState(false)
  


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
    
    
  }
  const registerUser =(user)=>{
    registerService(user)
      .then(
        setRegister('false')
      )
    alert('Registro correcto! ahora ingrese')   
  }
  const resetPassUser = async(nameUser)=>{
    console.log('nameuser', nameUser);
    let user = {
      email : nameUser
    }
    let data = await resetPass(user)
    alert(`${data.message} por favor revise su bandeja de entrada o Spam`);
    returnLogin();  
  }

  const changePasswordUser = async (user)=>{
    console.log('user', user);
    let data = await changePass(user)
    alert(data.message)
    console.log('data',data);
    setHome(true)
  }

  //llamada a los servicios///
   let nav = userLogin ? <Nav showUser={showUser} userLogin={userLogin}/> : ''

  return (
    <>
       <Router>
          {nav}
          <Switch>
            <Route exact path="/">
              <div className="container">
                <Login loginUser={loginUser} register={registerView} resetPassword={resetPassword} userLogin={userLogin}/>
              </div>
            </Route>
            <Route exact path="/users">
              <div className="container " style={{'marginTop': '10%'}}>
                <TableUsers  users={users} /> 
              </div>
            </Route>
            <Route exact path="/logOut">
              <div className="container " style={{'marginTop': '10%'}}>
              <p>aca se va a cerrar la secion</p>
              </div>
            </Route>
            <Route exact path="/MyPerfil">
              <div className="container " style={{'marginTop': '10%'}}>
                <p>aca va los datos de mi perfil</p>
              </div>
            </Route>
            <Route exact path="/register">
              <div className="container">
                <Register registerUser={registerUser} returnLogin = {returnLogin}/> 
              </div>
            </Route>
            <Route exact path="/resetPass">
              <div className="container">
                <ResetPassword resetPassUser={resetPassUser} returnLogin = {returnLogin} />
              </div>
            </Route>
            <Route exact path="/resetPassword" component={FormResetPass}>
              <div className="container">
                <FormResetPass home={home} changePasswordUser={changePasswordUser}/>
              </div>
            </Route>
          </Switch>
       </Router>
    </>

  )


  // if(login==='true'){
  //   if (viewUser==='true') {
  //     return (      
  //       <div className="container">
  //         <Nav showUser={showUser} userLogin={userLogin}/>
  //         <div className="row " style={{'marginTop': '10%'}}>
            
  //            <TableUsers  users={users}   /> 
  //         </div>
  //       </div>
  //     )
  //   }else{
  //     console.log('chau');
  //       return (      
  //       <div className="container">
  //         <Nav showUser={showUser} userLogin={userLogin}/>
  //         <p >estas logeadoooooo</p>
  //       </div>
  //     );
  //   }
  // }else if(register==='false'){
  //   if(resetPasswordState==='false'){
  //     return (
  //       <div className="container">
  //         <Login loginUser={loginUser} register={registerView} resetPassword={resetPassword}/>
  //       </div>
  //     );
  //   }else{
  //     return (
  //       <div className="container">
  //         <ResetPassword resetPassUser={resetPassUser} returnLogin = {returnLogin} />
  //       </div>
  //     );
  //   }
  // }else if(register==='true'){
  //   return (
  //     <div className="container">
  //       <Register registerUser={registerUser} returnLogin = {returnLogin}/> 
  //     </div>
  //   )
  // }
  
  
}


export default App;
