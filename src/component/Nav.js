import React from "react";

const Nav = (props)=> {
    const name = props.userLogin.name
    const role = props.userLogin.id_role    

    const showUser = ()=>{     
        props.showUser();
    }
    
    if (role===1) {
        
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
                    <div className="container">
                        <p className="navbar-brand"  style={{'marginTop':'10px'}}>Hola administrador! </p>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                            &#9776;
                        </button>
                        <div className="collapse navbar-collapse" id="exCollapsingNavbar">
                            <ul className="nav navbar-nav">
                                
                                <li className="nav-item">
                                    <button type="button" onClick={showUser} className="btn btn-secondary">Usuarios</button>
                                </li>
                                
                            </ul>
                            <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                            <li className="nav-item" style={{'marginTop':'10px'}} >
                                <p className="nav-link ">Hola {name}!</p>
                            </li>
                            <li className="nav-item"  style={{'marginLeft': '20px', 'marginTop':'10px'}}>
                                <button type="button"  className="btn btn-outline-secondary">Cerrar Sesion</button>
                            </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </>
        )
    }else{
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
                    <div className="container">
                        <p className="navbar-brand" >App Auth </p>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                            &#9776;
                        </button>
                        <div className="collapse navbar-collapse" id="exCollapsingNavbar">
                            <ul className="nav navbar-nav">
                                
                                <li className="nav-item">
                                    <button type="button"  className="btn btn-secondary">Usuarios</button>
                                </li>
                                
                            </ul>
                            <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                            <li className="nav-item" style={{'marginTop':'10px'}} >
                                <p className="nav-link ">Hola {name}!</p>
                            </li>
                            <li className="nav-item"  style={{'marginLeft': '20px', 'marginTop':'10px'}}>
                                <button type="button"  className="btn btn-outline-secondary">Cerrar Sesion</button>
                            </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </>
        )
    }
}

export default Nav