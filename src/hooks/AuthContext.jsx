import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Логіка отримання користувача, наприклад, через API
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://your-backend-api.com/user', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Приклад використання JWT
                    },
                });
                const data = await response.json();
                setUser(data.user); // або в залежності від структури відповіді
                setLoading(false);
            } catch (error) {
                console.error('Помилка при отриманні користувача:', error);
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
