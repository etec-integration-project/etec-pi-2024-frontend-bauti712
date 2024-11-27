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
  const [cartItems, setCartItems] = useState([]);
  const [calificacion, setCalificacion] = useState(0);

  const imagenes = {
    babolat,
    head,
    wilson,
    yonex
  };

  useEffect(() => {
    fetch("/app/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await axios.get("/app/calificaciones");
        if (respuesta.data.calificacion !== null) {
          setCalificacion(respuesta.data.calificacion);
        }
      } catch (error) {
        console.log("Error");
      }
    };
    fetchData();
  }, []);

  const addToCart = (product) => {
    if (cartItems[product.id]) {
        const updatedCart = { ...cartItems };
        updatedCart[product.id].quantity += 1;
        setCartItems(updatedCart);
    } else {
        setCartItems({
        ...cartItems,
        [product.id]: { ...product, quantity: 1 },
        });
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cartItems };

    if (updatedCart[productId]) {
        if (updatedCart[productId].quantity > 1) {
            updatedCart[productId].quantity -= 1;
        } else {
            delete updatedCart[productId];
        }

        setCartItems(updatedCart);
    }
  };

  const filteredCart = Object.values(cartItems).map(({ id, quantity }) => ({ id, quantity }));

  const jsonifiedCart = JSON.stringify(filteredCart);

  const handleCart = async () => {
    if (jsonifiedCart !== "[]") {
      try {
        await axios.post('/app/cart', {jsonifiedCart});
        console.log("jsonifiedCart: ", jsonifiedCart);
        alert('Articulos comprados con exito');
      } catch (err) {
        alert('Error al realizar la compra');
        console.log("Error al registrar carrito: ", err)
      }    
    } else {
      alert('Seleccionar articulos antes de realizar la compra');
    }
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>{calificacion}⭐ RacketZone</h1>
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
                {(productos ?? []).map((producto) => (
                  <div key={producto.id} className={`producto producto-${`producto.id`}`}>
                    <img src={imagenes[producto.imagen]} alt={producto.nombre} />
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <p><strong>Precio:</strong> ${producto.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(producto)}>Agregar al Carrito</button>
                  </div>
                ))}
              </section>
            } />
            
            <Route path="/Usuario" element={<Usuario />} /> {/* Ruta para el componente Usuario */}

            <Route path="/carrito" element={
              <div>
                <h2>Carrito</h2>
                {/* <p>Tu carrito de compras está vacío.</p> */}
                <section className='productos'>
                  {Object.values(cartItems).map((item) => (
                    <div key={item.id} className={`producto producto-${`producto.id`}`}>
                      <img src={imagenes[item.imagen]} alt={item.nombre} />
                      <h3>{item.quantity}x {item.nombre}</h3>
                      <p>{item.descripcion}</p>
                      <p><strong>Precio:</strong> - {Number((item.price * item.quantity)).toFixed(2)}</p>
                      <button onClick={() => removeFromCart(item.id)}>Quitar del Carrito</button>
                    </div>
                  ))}
                </section>
                <button onClick={handleCart} className='buy'>Comprar</button>
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