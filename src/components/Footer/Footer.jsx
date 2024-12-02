import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} MovieVerse. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy" className={styles.link}>Privacy Policy</a> |
                    <a href="/terms-of-service" className={styles.link}>Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
