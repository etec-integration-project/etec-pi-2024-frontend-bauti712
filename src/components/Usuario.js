import axios from 'axios';
import { useState } from 'react';

function Usuario() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

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
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/app/creacionUsuarios/iniciar-sesion', { username, password });
            setMensaje('Inicio con éxito');
        } catch (error) {
            
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
            
            <h2>Inicio</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">iniciar</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}

export default Usuario;
