import { useState, useEffect } from 'react';
import { Box, Form, Button, Input } from './Movies.styled';
import { getMovieBySearch } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;
    getMovieBySearch(query).then(({ results }) => {
      console.log(results);
      setMovies(results);
    });
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.searchMovies.value;
    setQuery(query);
    event.target.reset();
  };

  return (
    <>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Button type="submit"></Button>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="searchMovies"
          />
        </Form>
      </Box>
      {movies.length > 0 && <MovieList movies={movies} link={''} />}
    </>
  );
};
