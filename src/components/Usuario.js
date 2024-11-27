import axios from 'axios';
import { useState } from 'react';

function Usuario() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mensajelogin, setmensajelogin] = useState('');
    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [productUrl, setProductUrl] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [calificacion, setCalificacion] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/app/creacionUsuarios/registrar', { username, password });
            setMensaje('Usuario registrado con éxito');
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setMensaje('Usuario existente');
            } else {
                setMensaje('Error al registrar usuario');
            }
        }
    };
    const login = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/app/creacionUsuarios/iniciar-sesion', { username: loginUser, password: loginPassword });
            console.log({loginResponse: response})
            if (response.data == "Inicio de sesión exitoso" || response.status != 401 || response.statusCode != 401 ) { 
                setmensajelogin('Inicio exitoso');
            } else {
                setmensajelogin(`el inicio fallo`);
            }
        } catch (error) {
            setmensajelogin('credenciales invalidas');
        }
    };

    const productCreated =async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/app/productos', {
                nombre: productName,
                price: price,
                descripcion: descripcion,
                imagen: productUrl
            });
            location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    const calificar = async (e) => {
        e.preventDefault();

        if (calificacion >= 1 && calificacion <= 5) {
            try {
              const respuesta = await axios.post("/app/calificaciones", { calificacion: calificacion });
              alert(respuesta.data.mensaje);
            } catch (error) {
              alert(error);
            }
        } else {
            alert("Calificación inváida. Por favor ingrese un número del 1 al 5.");
        }
    };

    return (
        <div>
            <h2>Registrar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Registrar</button>
            </form>
            {mensaje && <p>{mensaje}</p>}

            <h2>Iniciar Usuario</h2>
            <form onSubmit={login}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={loginUser} onChange={(e) => setLoginUser(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                </div>
                <button type="submit">Iniciar</button>
            </form>
            {mensajelogin && <p>{mensajelogin}</p>}


            <h2>Crear nuevo producto</h2>
            <form onSubmit={productCreated}>
                <div>
                    <label>Nombre del producto:</label>
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                </div>

                <div>
                    <label>precio del producto:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>

                <div>
                    <label>descripcion del producto:</label>
                    <input type="textarea" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </div>

                <div>
                    <label>URL imagen:</label>
                    <input type="text" value={productUrl} onChange={(e) => setProductUrl(e.target.value)} required />
                </div>

                <button type="submit">Crear producto</button>
            </form>

            <h2>Calificanos</h2>
            <form onSubmit={calificar}>
                <div>
                    <label>Calificacion del 1 al 5:</label>
                    <input type="number" value={calificacion} onChange={(e) => setCalificacion(e.target.value)} required />
                </div>
                <button type="submit">Calificar</button>
            </form>
            
        </div>
    );
}

export default Usuario;
