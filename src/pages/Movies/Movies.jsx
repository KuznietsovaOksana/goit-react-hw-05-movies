import { useState, useEffect } from 'react';
import { Main, BoxForm, Form, Button, Input } from './Movies.styled';
import { getMovieBySearch } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieBySearch(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.searchMovies.value;
    setQuery(query);
    event.target.reset();
  };

  return (
    <Main>
      <BoxForm>
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
      </BoxForm>
      {isLoading ? <Loader /> : <MovieList movies={movies} link={''} />}
    </Main>
  );
};
