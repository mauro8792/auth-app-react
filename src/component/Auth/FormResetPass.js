import React from 'react';
import '../../CSS/Login.css';
import {
    Redirect,
  } from "react-router-dom";
  
const  FormResetPass = (props) => {
    
    let pass = React.createRef();
    let newPass= React.createRef()
    const changePass =(e)=>{
        let codeParams = window.location.search.substring(1);
        let code = codeParams.split("=")

        e.preventDefault();
        
        let user={};
        if(pass.current.value === newPass.current.value){
            user ={
                pass : pass.current.value,
                confirmPass : newPass.current.value,
                code : code[1]
            }
            props.changePasswordUser(user)
            
            
            
        }
        e.currentTarget.reset();
    }
    
    if(props.home){
        return <Redirect to={'/'} />
    }
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
                        <form onSubmit={changePass}>
                            <div className="form-group">
                                <label>Nueva Contraseña:</label>
                                <input type="password"  ref={pass} className="form-control" placeholder="Contraseña"/>
                            </div>
                            <div className="form-group">
                                <label>Confirmar Contraseña</label>
                                <input type="password" ref={newPass} className="form-control" placeholder="Confirmar Contraseña"/>
                            </div>
                            <button type="submit" className="btn btn-secondary">Guardar</button>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
    )
  
  
}


export default FormResetPass;