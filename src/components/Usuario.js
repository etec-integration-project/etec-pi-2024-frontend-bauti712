import axios from 'axios';
import { useState } from 'react';

function Usuario() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mensajelogin, setmensajelogin] = useState('');
    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

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
            
        </div>
    );
}

export default Usuario;
