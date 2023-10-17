import React from "react";
import { Link } from "react-router-dom";
const Menu = () =>{
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/encuesta/crear">Crear Encuestas</Link></li>
            </ul>
        </div>
    );
}
export default Menu;