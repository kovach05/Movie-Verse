import { useNavigate } from 'react-router-dom';
import axios from '../../axios';
import styles from './RegistrationForm.module.css';
import { useState } from 'react';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
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
            const response = await axios.post('auth/register', formData);
            console.log('Registration success:', response.data);
            navigate('/');
        } catch {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className={styles.registrationContainer}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className={styles.registrationForm}>
                <label> First Name
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label> Last Name
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label> Username
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </label>
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
                <button type="submit" className={styles.registerButton}>Register</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Використовуємо error тут */}
            <p className={styles.signInText}>
                Do you have an account? <a href="/signin" className={styles.signInLink}>Sign in</a>
            </p>
        </div>
    );
};

export default RegistrationForm;
