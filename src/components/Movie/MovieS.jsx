import styles from './MovieS.module.css';
import axios from "axios";
import { useEffect, useState } from "react";

const MovieS = () => {
    const [movies, setMovies] = useState([]); // Стан для фільмів
    const [loading, setLoading] = useState(true); // Стан для завантаження
    const [error, setError] = useState(null); // Стан для помилок

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("http://localhost:5233/api/movies/popular");
                console.log(response.data); // Вивести дані для перевірки структури
                setMovies(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.movieList}>
            <h2>Popular Movies</h2>
            <div className={styles.movies}>
                {movies.map((movie) => (
                    <div key={movie.id} className={styles.movieCard}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} // Змінено на poster_path
                            alt={movie.title}
                            className={styles.movieImage}
                        />
                        <div className={styles.movieInfo}>
                            <h3>{movie.title}</h3>
                            <p>
                                Rating:{" "}
                                <span className={styles.stars}>
                                    {"⭐".repeat(Math.round(movie.vote_average / 2))}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieS;
