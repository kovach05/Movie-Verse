import React, { Component } from 'react';
import styles from './MovieList.module.css';

class MovieList extends Component {
    render() {
        const movies = [
            { title: 'Atlas', rating: 4, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/730/168730519_t5roh0.jpg' },
            { title: 'Road House', rating: 5, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/762/168762684_9q95w5.png' },
            { title: 'Guardians of the Galaxy 2', rating: 5, image: 'https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_.jpg' },
            { title: 'Deadpool & Wolverine', rating: 5, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/168/956/168956852_whtfuc.jpg' },
        ];

        const cartoons = [
            { title: 'Kung Fu Panda 4', rating: 5, image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/df/Kung_Fu_Panda_4_promo.jpg/640px-Kung_Fu_Panda_4_promo.jpg' },
            { title: 'Inside Out 2', rating: 5, image: 'https://lumiere-a.akamaihd.net/v1/images/p_insideout2_now_available_disneyplus_d24c051c.jpeg' },
            { title: 'Despicable Me 4', rating: 5, image: 'https://m.media-amazon.com/images/M/MV5BNzY0ZTlhYzgtOTgzZC00ZTg2LTk4NTEtZDllM2E2NGE5Njg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
            { title: 'Transformers One', rating: 5, image: 'https://www.classificationoffice.govt.nz/media/images/transformers_one.width-700.jpg' },
        ];

        const anime = [
            { title: 'Naruto', rating: 5, image: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
            { title: 'Attack on Titan', rating: 5, image: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/165/980/165980476_021594.jpg' },
            { title: 'Blue Lock', rating: 5, image: 'https://www.falcon.cz/wp/wp-content/uploads/unorganized/bluelock-poster-770.jpg' },
            { title: 'Bleach', rating: 5, image: 'https://m.media-amazon.com/images/M/MV5BMjgyM2QzMjAtOGZjOS00OGFkLTkxZGYtMDJjZGM5MzIzYmM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
        ];

        return (
            <div className={styles.movieList}>
                <h2>Movies by ratings</h2>
                <div className={styles.movies}>
                    {movies.map((movie, index) => (
                        <div key={index} className={styles.movieCard}>
                            <img src={movie.image} alt={movie.title} className={styles.movieImage} />
                            <div className={styles.movieInfo}>
                                <h3>{movie.title}</h3>
                                <p>
                                    Rating: <span className={styles.stars}>{'⭐'.repeat(movie.rating)}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.button}>Load More Movies</button>

                {/* Секція для мультфільмів */}
                <h2>Cartoons</h2>
                <div className={styles.movies}>
                    {cartoons.map((cartoon, index) => (
                        <div key={index} className={styles.movieCard}>
                            <img src={cartoon.image} alt={cartoon.title} className={styles.movieImage} />
                            <div className={styles.movieInfo}>
                                <h3>{cartoon.title}</h3>
                                <p>
                                    Rating: <span className={styles.stars}>{'⭐'.repeat(cartoon.rating)}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.button}>Load More Cartoons</button>

                {/* Секція для аніме */}
                <h2>Anime</h2>
                <div className={styles.movies}>
                    {anime.map((animeItem, index) => (
                        <div key={index} className={styles.movieCard}>
                            <img src={animeItem.image} alt={animeItem.title} className={styles.movieImage} />
                            <div className={styles.movieInfo}>
                                <h3>{animeItem.title}</h3>
                                <p>
                                    Rating: <span className={styles.stars}>{'⭐'.repeat(animeItem.rating)}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.button}>Load More Anime</button>
            </div>
        );
    }
}

export default MovieList;
