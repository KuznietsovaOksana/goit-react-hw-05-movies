import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/api';
import { List, Item, Title, Text } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviews([...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        isLoading ? (
          <Loader />
        ) : (
          <List>
            {reviews.map(({ author, content, id }) => {
              return (
                <Item key={id}>
                  <Title>Author: {author}</Title>
                  <Text>"{content}"</Text>
                </Item>
              );
            })}
          </List>
        )
      ) : (
        <p>Sorry, there is no information</p>
      )}
    </>
  );
};
