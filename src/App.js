import './App.css';
import Navbar from './componentes/Navbar';
import Hero from './componentes/Hero';
import UncontrolledExample from './componentes/Carousel';
import Obj from './componentes/obj';
import Video from './componentes/ytvideo';
import Explicacion from './componentes/Explicacion';
import Fundamentacion from './componentes/Fundamentacion';
import Columna1 from './componentes/column1';
import ObjetivoE from './componentes/ObjetivoE';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="content-section">
        <h1>Documentación del Proyecto</h1>
        <Explicacion />
        <Fundamentacion />
        <ObjetivoE />
        <Columna1 />
        <h2>Imágenes del Proyecto</h2>
        <UncontrolledExample />
        <h2>Modelo 3D Interactivo</h2>
        <Obj />
        <h2>Video Explicativo</h2>
        <Video />
      </div>
    </div>
  );
}

export default App;
