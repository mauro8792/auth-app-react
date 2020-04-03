import React from "react";
import '../../CSS/Login.css';
import { Link } from "react-router-dom";
  
const Register = (props)=> {
    
    
    let userName = React.createRef();
    let password= React.createRef()
    let name= React.createRef()
    let last_name= React.createRef()

    const createUser = (e)=>{
        e.preventDefault();
        let user = {}
        if(userName.current.value && password.current.value && name.current.value && last_name.current.value){
            user ={
                name: name.current.value,
                lastName : last_name.current.value,
                email : userName.current.value,
                password: password.current.value,
                id_role : 1
            }
            props.registerUser(user)
            
            
        }
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
                    <h3>Nuevo Usuario</h3>
                    <form onSubmit={createUser} >
                        <div className="row" >
                            <div className='col'>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text"  ref={name} className="form-control" placeholder="Nombre"/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="form-group">
                                    <label>Apellido</label>
                                    <input type="text" ref={last_name} className="form-control" placeholder="Apellido"/>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className='col'>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text"  ref={userName} className="form-control" placeholder="Email"/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input type="password" ref={password} className="form-control" placeholder="Contraseña"/>
                                </div>
                            </div>
                        </div>
                        
                            <button type="submit"   className="btn btn-success"  >Registrar</button>
                            <button type="reset"   className="btn btn-secondary" style={{'marginLeft': '2%'}} >Reset</button>
                            {/* <button onClick={back}   className="btn btn-primary" style={{'marginLeft': '2%'}} >Volver</button> */}
                            <Link to="/"> <button class="btn btn-primary" style={{'marginLeft': '2%'}}>Volver</button></Link>

                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Register