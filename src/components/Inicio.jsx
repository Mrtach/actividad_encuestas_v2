import React from "react";
import { Link } from "react-router-dom";

const Inicio = ({listaEncuestas})=>{
    console.log(listaEncuestas);
    return (
        <div>
            <h1>Lista de Encuestas Disponibles</h1>
            {listaEncuestas.map((encuestas) => (
                <div className="encuesta-item-container">
                    <div className="encuesta-item">
                        <Link to={`/encuesta/${encuestas.id}`}>
                            <h2>{encuestas.titulo}</h2>
                        </Link>
                        <p>{encuestas.descripcion}</p>
                        <br />
                    </div>
                </div>
            ))};
        </div>
    );
}

export default Inicio;