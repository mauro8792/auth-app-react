import React from "react";
import '../../CSS/Login.css';
const Register = (props)=> {
    
    
    let userName = React.createRef();

    const resetpass = (e)=>{
        e.preventDefault();
        props.resetPassUser(userName.current.value)
        e.currentTarget.reset();
    }
    const back=()=>{
        props.returnLogin()
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
                                    <label>Usuario</label>
                                    <input type="text"  ref={userName} className="form-control" placeholder="Usuario"/>
                                </div>
                            </div>                            
                        </div>
                        
                            <button type="submit"   className="btn btn-success"  >Enviar</button>
                            <button type="reset"   className="btn btn-secondary" style={{'marginLeft': '2%'}} >Reset</button>
                            <button onClick={back}   className="btn btn-primary" style={{'marginLeft': '2%'}} >Volver</button>

                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Register