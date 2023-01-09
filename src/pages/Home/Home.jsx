import { useState, useEffect } from 'react';
import { Box, Title } from './Home.styled';
import { getTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const movies = await getTrendingMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Box>
      <Title>Trending today</Title>
      {isLoading ? <Loader /> : <MovieList movies={movies} link={'movies/'} />}
    </Box>
  );
};
