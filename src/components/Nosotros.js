// src/components/Nosotros.js
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Nosotros.css';

function Nosotros() {
  const [calificaciones, setCalificaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/app/user_calificaciones');
        setCalificaciones(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <main>
        <section className="nosotros">
          <h2>Sobre Nosotros</h2>
          <p>En RacketZone, nuestra pasión por el tenis va más allá de las canchas. Fundada en 2005 por un grupo de entusiastas del deporte, nuestra tienda ha evolucionado desde una pequeña tienda local hasta convertirse en un referente en el mundo de las raquetas de tenis. Nuestro objetivo siempre ha sido ofrecer productos de la más alta calidad para jugadores de todos los niveles, desde principiantes hasta profesionales.</p>
          <p>La historia de RacketZone comienza con un sueño compartido por nuestro fundador, Bautista Cola. Tras una exitosa carrera como jugador de tenis en torneos locales, Javier decidió que era el momento de compartir su amor por el deporte con otros. Empezó vendiendo raquetas y accesorios en un pequeño local en el centro de la ciudad, donde la atención personalizada y el conocimiento experto hicieron que la tienda ganara rápidamente una base de clientes leales.</p>
          <p>A lo largo de los años, hemos ampliado nuestra gama de productos para incluir las mejores marcas de raquetas, ropa deportiva y accesorios, manteniendo siempre nuestro compromiso con la calidad y el servicio. Nos enorgullece ofrecer una experiencia de compra única, donde cada cliente recibe asesoramiento experto y personalizado para encontrar el equipo perfecto que se adapte a sus necesidades y estilo de juego.</p>
          <p>En RacketZone, no solo vendemos productos, sino que también somos parte de la comunidad del tenis. Patrocinamos torneos locales y colaboramos con academias para apoyar el desarrollo del deporte a nivel regional. Creemos en el poder del tenis para unir a las personas y fomentar un estilo de vida activo y saludable.</p>
          <p>Gracias por ser parte de nuestra historia. Estamos aquí para ayudarte a alcanzar tus metas en la cancha y hacer que cada golpe cuente. ¡Te invitamos a explorar nuestra tienda y descubrir cómo podemos ayudarte a mejorar tu juego!</p>
        </section>

        <section className="nosotros">
          <h2>Nuestras calificaciones</h2>
          {calificaciones.map((item, index) => (
            <>
              <hr/>
              <div key={item.id}>
                <h3>{item.calificacion}⭐ Estrellas</h3>
                <p>{item.username}</p>
              </div>
            </>
          ))}
        </section>
      </main>

      <footer>
        <p>&copy; 2024 RacketZone. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Nosotros;
