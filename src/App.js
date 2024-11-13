import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import carro from "./imagenes/carro.png";
import user from "./imagenes/user.png";
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Usuario from './components/Usuario';

import babolat from "./imagenes/babolat.jpg";
import head from "./imagenes/head.jpg";
import wilson from "./imagenes/wilson.jpg";
import yonex from "./imagenes/yonex.jpg";
import axios from 'axios';


function App() {
  const [productos, setProductos] = useState([]);

  const imagenes = {
    babolat,
    head,
    wilson,
    yonex
  };

  useEffect(async () => {
    const response = await axios.get('/app/creacionUsuarios/productos')
    const a = await response.json()
    setProductos(a)
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>RacketZone</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/Usuario">Usuario</Link></li>
              <li><Link to="/carrito">Carrito</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
            </ul>
            <div className="iconos">
              <img src={carro} alt="Carrito" />
              <img src={user} alt="Usuario" />
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <section className="productos">
                <h2>Productos Destacados</h2>
                {productos.map((producto) => (
                  <div key={producto.id} className={`producto producto-${`producto.id`}`}>
                    <img src={imagenes[producto.imagen]} alt={producto.nombre} />
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
                    <button>Agregar al Carrito</button>
                  </div>
                ))}
              </section>
            } />
            
            <Route path="/Usuario" element={<Usuario />} /> {/* Ruta para el componente Usuario */}

            <Route path="/carrito" element={
              <div>
                <h2>Carrito</h2>
                <p>Tu carrito de compras está vacío.</p>
              </div>
            } />

            <Route path="/contacto" element={<Contacto />} />

            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 RacketZone. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;