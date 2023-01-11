import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Main, BoxForm, Form, Button, Input } from './Movies.styled';
import { getMovieBySearch } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieBySearch(movieName);
        setQuery(movieName);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.searchMovies.value;
    setSearchParams({ query: query });
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
}
