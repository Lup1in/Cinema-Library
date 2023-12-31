import { useState, useEffect } from "react"
import MovieCard from '../Components/MovieCard'
import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
        console.log(topRatedURL);
        getTopRatedMovies(topRatedURL);
    }, []);

    console.log(topMovies);

    return (
        <div className="container">
            <h2 className="title">Best Movies</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Loading...</p>}
                {topMovies.length > 0 &&
                    topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Home