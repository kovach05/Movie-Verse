import axios from 'axios';

const testConnection = async () => {
    try {
        const response = await axios.get('http://localhost:5233/health'); // Ендпоінт для перевірки
        console.log('Server is connected:', response.data);
    } catch (error) {
        console.error('Failed to connect to the server:', error.message);
    }
};

testConnection()
    .then(() => console.log('Connection check completed'))
    .catch(err => console.error('Error during connection check:', err));



// Налаштуйте базовий URL для вашого API
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5233/',  // Змініть на адресу вашого бекенду
    headers: {
        'Content-Type': 'application/json',
    },
});

// Додаємо інтерсептори для обробки запитів або відповідей (наприклад, для додавання токенів)
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;