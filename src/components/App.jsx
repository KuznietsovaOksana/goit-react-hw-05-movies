import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Movies } from 'pages/Movies/Movies';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { GlobalStyleComponent } from 'styles/GlobalStyles';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyleComponent />
    </>
  );
};
