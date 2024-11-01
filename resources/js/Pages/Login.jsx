import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import axios from './axiosConfig';
import '../../css/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        axios.post('/login', { email, password })
            .then((response) => {
                const { data } = response;
                localStorage.setItem('token', data.token);
                Inertia.get('reservations');
            })
            .catch((error) => {
                console.error('Login error:', error);
                setError(error.response?.data?.error || 'Erro ao fazer login');
            });
    };

    return (
        <div className="login-container">
            <div className="background-image"></div>
            <header className="header">
                <h1 className="hotel-title">Lazy Paradise Hotel</h1>
                <h3 className="hotel-subtitle">Refúgio tropical de tranquilidade e beleza</h3>
            </header>
            <main className="main-content">
                <section className="welcome-message">
                    <p>Desfrute de uma experiência inesquecível em um paraíso tropical, onde o conforto encontra a natureza. Relaxe e descubra o que temos a oferecer.</p>
                </section>
                <h2>Login</h2>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Entrar</button>
                </form>
            </main>
        </div>
    );
};

export default Login;
