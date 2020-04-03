import React from "react";
import '../../CSS/Login.css';
import {Link} from "react-router-dom";
const Register = (props)=> {
    
    
    let userName = React.createRef();

    const resetpass = (e)=>{
        e.preventDefault();
        if(userName.current.value){
            props.resetPassUser(userName.current.value)
        }else
            alert('Debes ingresar un Email')
        e.currentTarget.reset();
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
                    <div className="login-form" >
                    <h3>Recordar Contraseña</h3>
                    <form onSubmit={resetpass} >
                        
                        <div className="row" >
                            <div className='col'>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text"  ref={userName} className="form-control" placeholder="Email"/>
                                </div>
                            </div>                            
                        </div>
                        
                            <button type="submit"   className="btn btn-success"  >Enviar</button>
                            <button type="reset"   className="btn btn-secondary" style={{'marginLeft': '2%'}} >Reset</button>
                            <Link to="/"> <button className="btn btn-primary" style={{'marginLeft': '2%'}}>Volver</button></Link>

                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Register