import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Main, BoxForm, Form, Button, Input } from './Movies.styled';
import { getMovieBySearch } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        setSearchQuery(movieName);
        const data = await getMovieBySearch(movieName);
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
    setSearchParams({ query: searchQuery });
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
            name="movieName"
            onChange={e => setSearchQuery(e.target.value)}
          />
        </Form>
      </BoxForm>
      {isLoading ? <Loader /> : <MovieList movies={movies} link={''} />}
    </Main>
  );
}
