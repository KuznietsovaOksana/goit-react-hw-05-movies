// import { useState } from 'react';
import { Box, Form, Button, Input } from './Movies.styled';

export const Movies = () => {
  const inputChange = () => {};

  const handleSubmit = () => {};

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Button type="submit"></Button>
        <Input
          onChange={inputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </Form>
    </Box>
  );
};

// import { useState, useEffect } from 'react';

// export const Movies = () => {
// const [movies, setMovies] = useState([]);

// useEffect(() => {}, []);

// return <>Movies</>;
// };
