import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import {
  Box,
  ButtonGoBack,
  MovieBox,
  Img,
  MovieTitle,
  Rating,
  Overview,
  OverviewInfo,
  Genres,
  Details,
  InfoTitle,
  LinkItem,
  Error,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { poster_path, name, title, overview, genres, vote_average } =
          await getMovieById(movieId);
        setMovieDetails({
          poster_path,
          name: name || undefined,
          title: title || undefined,
          vote_average: vote_average.toFixed(1),
          overview,
          genres: genres.map(({ name }) => name + ' '),
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  const hasError = error.length > 0;
  const { poster_path, name, title, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      {hasError ? (
        <Error>
          <p>File was not found!</p>
          <p>Please, try again later!</p>
        </Error>
      ) : (
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <ButtonGoBack type="button">Go back</ButtonGoBack>
              <MovieBox>
                <Img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : 'https://media.istockphoto.com/id/1191001701/photo/popcorn-and-clapperboard.jpg?s=612x612&w=0&k=20&c=iUkFTVuU8k-UCcZDxczTWs6gkRa0nAMihp2Jf_2ASKM='
                  }
                  alt={name || title}
                />
                <div>
                  <MovieTitle>{name || title || 'No info'}</MovieTitle>
                  <Rating>Rating: {vote_average || 'Not found'}</Rating>
                  <Overview>Overview:</Overview>
                  <OverviewInfo>{overview || 'Not found'}</OverviewInfo>
                  <Genres>Genres:</Genres>
                  <p>{genres || 'Others'}</p>
                </div>
              </MovieBox>
              <Details>
                <InfoTitle>Additional information</InfoTitle>
                <ul>
                  <li>
                    <LinkItem to="cast">Cast</LinkItem>
                  </li>
                  <li>
                    <LinkItem to="reviews">Reviews</LinkItem>
                  </li>
                </ul>
              </Details>
              <Outlet />
            </>
          )}
        </Box>
      )}
    </>
  );
};
