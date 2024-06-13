/* App.js */
import './App.css';
import babolat from "./imagenes/babolat.jpg";
import head from "./imagenes/head.jpg";
import carro from "./imagenes/carro.png";
import user from "./imagenes/user.png";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tienda de Raquetas de Tenis</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/carrito">Carrito</a></li>
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
          {/* Aquí se listarían los productos destacados */}

          <div className="producto producto-1">
            <img src={babolat} alt="Raqueta 1" />
            <h3>Raqueta de Tenis 1</h3>
            <p>Descripción del producto.</p>
            <button>Agregar al Carrito</button>
          </div>

          <div className="producto producto-2">
            <img src={head} alt="Raqueta 1" />
            <h3>Raqueta de Tenis 2</h3>
            <p>Descripción del producto.</p>
            <button>Agregar al Carrito</button>
          </div>

          {/* Se pueden agregar más productos */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Tienda de Raquetas de Tenis</p>
      </footer>
    </div>
  );
}

export default App;
