import { useParams, Link } from "react-router-dom";

const Encuesta = ({ listaEncuestas, responderEncuesta }) => {
    const { id } = useParams();
    console.log(listaEncuestas);
    const encuesta = listaEncuestas.find((enc) => enc.id === Number(id));
    console.log("Preguntas: " + encuesta.preguntas);
    return (
        <div>
            <div className="encuesta-item-container">
                <div className="encuesta-item">
                    <Link to={`/encuesta/${id}`}>
                        <h2>{encuesta.titulo}</h2>
                    </Link>
                    <p>{encuesta.descripcion}</p>
                    <br />
                </div>
            </div>
                <div className="encuesta-item-container">
                    <div className="encuesta-item">
                        <h2>Preguntas</h2>
                        <p>
                        {!encuesta.preguntas && <p>Sin preguntas definidas.</p>}
                        {encuesta.preguntas && encuesta.preguntas.map((pregunta) => (
                            <div key={pregunta.id}>
                                <h3>{pregunta.pregunta}</h3>
                                <ol>
                                    {pregunta.opciones.map((opcion) => (
                                        <div key={opcion.id}>
                                            <label>
                                                <li>{opcion.texto}</li>
                                            </label>
                                        </div>
                                    ))}
                                </ol>
                            </div>
                        ))}
                        </p>
                        <br />
                    </div>
                </div>
            <Link to="/">Volver</Link>
        </div>
    );
};

export default Encuesta;
