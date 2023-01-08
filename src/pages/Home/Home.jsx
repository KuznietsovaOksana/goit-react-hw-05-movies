import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <h2>Trending movies for today</h2>
      <ul>
        {movies.map(({ name, title, id }) => {
          return (
            <Link key={id} to={`${id}`}>
              <h2>{name || title}</h2>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};
