import { useState, useEffect } from 'react';
import { Box, Title, List, Item, NavItem } from './Home.styled';
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
    <Box>
      <Title>Trending today</Title>
      <List>
        {movies.map(({ name, title, id }) => {
          return (
            <Item key={id}>
              <NavItem to={`${id}`}>
                <h3>{name || title}</h3>
              </NavItem>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};
