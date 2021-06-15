import React from 'react';
import './nav.css';



import { Link, NavLink } from 'react-router-dom'; /* react-router se instala independientemente - no viene en el paquete inicial del recat app  */
/* la diferencia entre link y navLink es que navlink me permite dar estilo a la ruta seleccionada : donde me ubico en un x tiempo : exact activeClassName="active" */




export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark">

            <Link to="/" className="navbar-brand"> useContext </Link>  {/* link es componente comun curiente , alternativa  <a> <=> link , href <=> to  */}

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* no usamos ancor tags <a> para evitar refresh del navigador */}
                    <NavLink exact activeClassName="active" to="/" className="nav-item nav-link"> Home </NavLink> 
                    <NavLink exact activeClassName="active" to="/about" className="nav-item nav-link"> About </NavLink>
                    <NavLink exact activeClassName="active" to="/login" className="nav-item nav-link"> Login</NavLink>
                </div> {/* benificios no hace refresh , es decir rapides en la navifacion : no tiene porque  hacer peticion al servidor para traer contenido de la pagina */}
            </div>
        </nav>
    )
}
