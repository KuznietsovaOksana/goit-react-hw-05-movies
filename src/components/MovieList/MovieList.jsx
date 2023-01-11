import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, NavItem } from './MovieList.styled';

export const MovieList = ({ movies, link }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ name, title, id }) => {
        return (
          <Item key={id}>
            <NavItem to={`${link}${id}`} state={{ from: location }}>
              <h3>{name || title}</h3>
            </NavItem>
          </Item>
        );
      })}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
  link: PropTypes.string,
};
