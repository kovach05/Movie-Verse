// src/components/SignInForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';  // Імпортуємо налаштований axios
import styles from './SignInForm.module.css';

const SignInForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('auth/login', {
                email: formData.email,
                password: formData.password,
            });
            console.log('Login success:', response.data);
            localStorage.setItem('authToken', response.data.token); // Зберігаємо токен
            navigate('/'); // Перенаправлення на головну сторінку
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className={styles.signInContainer}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className={styles.signInForm}>
                <label> Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label> Password
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className={styles.signInButton}>Sign In</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p className={styles.registerText}>
                Don't have an account? <a href="/register" className={styles.registerLink}>Register</a>
            </p>
        </div>
    );
};

export default SignInForm;
