/* App.js */
import './App.css';
import babolat from "./imagenes/babolat.jpg";
import head from "./imagenes/head.jpg";
import wilson from "./imagenes/wilson.jpg";
import yonex from "./imagenes/yonex.jpg";
import carro from "./imagenes/carro.png";
import user from "./imagenes/user.png";

function App() {
  return (
    <div className="App">
      <header>
        <h1>RacketZone</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/carrito">Carrito</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
          </ul>
          <div className="iconos">
            <img src={carro} alt="Carrito" />
            <img src={user} alt="Usuario" />
          </div>
        </nav>
      </header>
      <main>
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

        <section className="about">
          <h2>Sobre Nosotros</h2>
          <p>Somos una tienda especializada en raquetas de tenis, ofreciendo productos de alta calidad para todos los niveles de juego. Nuestro objetivo es brindar a nuestros clientes las mejores herramientas para mejorar su desempeño en la cancha.</p>
        </section>

        <section className="contacto">
          <h2>Contacto</h2>
          <form>
            <div>
              <label>Nombre:</label>
              <input type="text" name="nombre" placeholder="Tu nombre" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" placeholder="Tu email" />
            </div>
            <div>
              <label>Mensaje:</label>
              <textarea name="mensaje" placeholder="Escribe tu mensaje"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 RacketZone. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
