import { useNavigate } from 'react-router-dom';
import axios from '../../axios';
import styles from './SignInForm.module.css';
import {useState} from "react";

const SignInForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
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
                username: formData.username,
                password: formData.password,
            });
            console.log('Login success:', response.data);
            localStorage.setItem('authToken', response.data.token);
            navigate('/'); // Перенаправлення на головну сторінку
        } catch {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className={styles.signInContainer}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className={styles.signInForm}>
                <label> Username
                    <input
                        type="username"
                        name="username"
                        value={formData.username}
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
                Dont have an account? <a href="/register" className={styles.registerLink}>Register</a>
            </p>
        </div>
    );
};

export default SignInForm;
