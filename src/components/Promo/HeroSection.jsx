import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({ title, description, imageUrl }) => {
    const handleWatchNow = () => {
        window.open(
            "https://www.youtube.com/watch?v=Lb2wwEx6DVw&ab_channel=MarvelEntertainment",
            "_blank"
        );
    };

    const handleMoreInfo = () => {
        window.open(
            "https://www.marvel.com/games/marvel-1943-rise-of-hydra",
            "_blank"
        );
    };

    return (
        <section className={styles.hero}>
            <img src={imageUrl} alt="Hero" className={styles.image} />
            <div className={styles.text}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={styles.buttonGroup}>
                    <button
                        onClick={handleWatchNow}
                        className={`${styles.heroButton} ${styles.primary}`}
                    >
                        Watch Now
                    </button>
                    <button
                        onClick={handleMoreInfo}
                        className={`${styles.heroButton} ${styles.secondary}`}
                    >
                        More info
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
