import React from 'react';
import '../../CSS/Login.css';
import {
    Redirect,
    Link
  } from "react-router-dom";
  
const  Login = (props) => {

    let userName = React.createRef();
    let password= React.createRef()

    const loginForm =(e)=>{
        e.preventDefault();
        let user={};
        if(userName.current.value && password.current.value){
            user ={
                email : userName.current.value,
                password: password.current.value
            }
            props.loginUser(user)
            
            
        }
        e.currentTarget.reset();
    }
    
    

    if ( props.userLogin)
        return <Redirect to={'/'} />
    return (
        
        <div>
            <div className="sidenav">
                <div className="login-main-text">
                <img src={'https://cdn.educba.com/academy/wp-content/uploads/2019/06/agile-tool.jpg'} className="img-fluid" alt="Tools"/>
                
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form onSubmit={loginForm}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text"  ref={userName} className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input type="password" ref={password} className="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-secondary">Ingresar</button>
                            <Link to="/register" style={{'textDecotaion':'none'}}> <button class="btn btn-primary" style={{'textDecotaion':'none'}}>Registrar</button></Link>
                        </form>
                        <Link to="/resetPass"> <a class="nav-link" href="/#">¿Has olvidado la contreña?</a></Link>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
  
  
}


export default Login;