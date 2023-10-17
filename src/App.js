import React,{useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import CrearEncuesta from './components/CrearEncuesta';
import Encuesta from './components/Encuesta';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import encuestas from './data/encuestas.json';
import './styles/app.css';

function App() {
  const [listaEncuestas, setListaEncuestas] = useState(encuestas);
  const agregarEncuesta = (nuevaEncusta) => {
    nuevaEncusta.id = listaEncuestas.length + 1
    setListaEncuestas([...listaEncuestas, nuevaEncusta]);
  };
  const responderEncuesta = (id, respuesta) => {
    const encunesta = listaEncuestas.find(enc => enc.id === Number(id));
    encunesta.respuestas.push(respuesta);
  };

  return(
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio listaEncuestas={listaEncuestas} />} />
        <Route path="/encuesta/crear" element={<CrearEncuesta agregarEncuesta={agregarEncuesta} />} />
        <Route path="/encuesta/:id" element={<Encuesta listaEncuestas={listaEncuestas} responderEncuesta={responderEncuesta} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
