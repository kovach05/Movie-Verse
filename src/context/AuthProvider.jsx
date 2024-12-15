// src/contexts/AuthProvider.js
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = () => {
            setUser({ name: 'Test User' });
            setLoading(false);
        };

        unsubscribe();
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
