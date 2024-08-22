// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import babolat from "./imagenes/babolat.jpg";
import head from "./imagenes/head.jpg";
import wilson from "./imagenes/wilson.jpg";
import yonex from "./imagenes/yonex.jpg";
import carro from "./imagenes/carro.png";
import user from "./imagenes/user.png";
import Nosotros from './components/Nosotros'; // Importa el componente Nosotros
import Contacto from './components/Contacto'; // Importa el componente Contacto

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>RacketZone</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
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
                <div className="producto producto-1">
                  <img src={babolat} alt="Raqueta Babolat" />
                  <h3>Raqueta de Tenis Babolat</h3>
                  <p>Raqueta de alta gama para jugadores profesionales.</p>
                  <p><strong>Precio:</strong> $250.00</p>
                  <button>Agregar al Carrito</button>
                </div>

                <div className="producto producto-2">
                  <img src={head} alt="Raqueta Head" />
                  <h3>Raqueta de Tenis Head</h3>
                  <p>Ideal para jugadores avanzados que buscan control y potencia.</p>
                  <p><strong>Precio:</strong> $230.00</p>
                  <button>Agregar al Carrito</button>
                </div>

                <div className="producto producto-3">
                  <img src={wilson} alt="Raqueta Wilson" />
                  <h3>Raqueta de Tenis Wilson</h3>
                  <p>Equilibrio perfecto entre potencia y control para todo tipo de jugadores.</p>
                  <p><strong>Precio:</strong> $210.00</p>
                  <button>Agregar al Carrito</button>
                </div>

                <div className="producto producto-4">
                  <img src={yonex} alt="Raqueta Yonex" />
                  <h3>Raqueta de Tenis Yonex</h3>
                  <p>Raqueta ligera y maniobrable, perfecta para jugadores técnicos.</p>
                  <p><strong>Precio:</strong> $240.00</p>
                  <button>Agregar al Carrito</button>
                </div>
              </section>
            } />
            
            <Route path="/productos" element={
              <div>
                <h2>Productos</h2>
                <p>Aquí encontrarás todos nuestros productos disponibles.</p>
              </div>
            } />

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
