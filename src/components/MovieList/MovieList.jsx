import { List, Item, NavItem } from './MovieList.styled';

export const MovieList = ({ movies, link }) => {
  return (
    <List>
      {movies.map(({ name, title, id }) => {
        return (
          <Item key={id}>
            <NavItem to={`${link}${id}`}>
              <h3>{name || title}</h3>
            </NavItem>
          </Item>
        );
      })}
    </List>
  );
};
