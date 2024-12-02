// src/axios.js

import axios from 'axios';

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
