// src/components/Contacto.js
import React from 'react';

function Contacto() {
  return (
    <div className="App">
      <main>
        <section className="contacto">
          <h2>Contacto</h2>
          <p>En RacketZone, valoramos la comunicación con nuestros clientes. Si tienes alguna pregunta, sugerencia o comentario, no dudes en ponerte en contacto con nosotros. Nuestro equipo está aquí para ayudarte y responder a todas tus inquietudes.</p>
          <p>Por favor, completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible. También puedes enviarnos un correo electrónico directamente a <a href="mailto:contacto@racketzone.com">contacto@racketzone.com</a> o llamarnos al <strong>+123 456 7890</strong>.</p>
          
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

export default Contacto;
