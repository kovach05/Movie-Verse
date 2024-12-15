import styles from './HeroSection.module.css';
import PropTypes from "prop-types";

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
        <section className={styles.hero}> {/* Використовуємо hero, а не hero-section */}
            <img src={imageUrl} alt="Hero" className={styles.image} />
            <div className={styles.text}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={styles.buttonGroup}> {/* Використовуємо правильний клас buttonGroup */}
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

HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default HeroSection;
