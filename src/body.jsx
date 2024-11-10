

import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import { cartData } from "../../cart_data";


export default function Body() {
  const [data1, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/app/productos');
        setData(response.data);
      } catch (error) {
        console.error('Error interno del servidor:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div id='container-items'>
      <div className="body-items">
        <div className="container-items">
          {data1 && data1["products"] ? (
            data1["products"].map((product) => (
              <div className="item" key={product.id}>
                <figure>
                  <img src={product.imageurl} alt="item"/>
                </figure>
                <div className="info-product">
                  <h3>{product.name}</h3>
                  <h4>{product.price}$</h4>
                  <button onClick={() => {
                    console.log(product.name)
                    cartData.addProductToCart(product)
                    
                  }}>Añadir al carro</button>
                  <a href="">INFO</a>
                </div>
              </div>
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
}
