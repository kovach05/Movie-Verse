import React from 'react';
import styles from './MovieSections.module.css';

const MovieSections = () => {
    const viewedMovies = [
        { title: 'Atlas', rating: 4, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/730/168730519_t5roh0.jpg' },
        { title: 'Road House', rating: 5, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/762/168762684_9q95w5.png' },
        { title: 'Guardians of the Galaxy 2', rating: 5, image: 'https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_.jpg' },
        { title: 'Deadpool & Wolverine', rating: 5, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/956/168956852_whtfuc.jpg' },
    ];

    const favoriteMovies = [
        { title: 'Atlas', rating: 4, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/730/168730519_t5roh0.jpg' },
        { title: 'Road House', rating: 5, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/762/168762684_9q95w5.png' },
        { title: 'Guardians of the Galaxy 2', rating: 5, image: 'https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_.jpg' },
        { title: 'Deadpool & Wolverine', rating: 5, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/956/168956852_whtfuc.jpg' },
    ];

    return (
        <div className={styles.movieSections}>
            <section className={styles.section}>
                <h2>Movies Viewed</h2>
                <div className={styles.movies}>
                    {viewedMovies.map((movie, index) => (
                        <div key={index} className={styles.movieCard}>
                            <img src={movie.image} alt={movie.title} className={styles.movieImage} />
                            <div className={styles.movieInfo}>
                                <h3>{movie.title}</h3>
                                <p>Rating: {'⭐'.repeat(movie.rating)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.loadMoreButton}>Load More</button>
            </section>

            <section className={styles.section}>
                <h2>Favorite Movies</h2>
                <div className={styles.movies}>
                    {favoriteMovies.map((movie, index) => (
                        <div key={index} className={styles.movieCard}>
                            <img src={movie.image} alt={movie.title} className={styles.movieImage} />
                            <div className={styles.movieInfo}>
                                <h3>{movie.title}</h3>
                                <p>Rating: {'⭐'.repeat(movie.rating)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.loadMoreButton}>Load More</button>
            </section>
        </div>
    );
};

export default MovieSections;
