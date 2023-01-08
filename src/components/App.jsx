import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import { GlobalStyleComponent } from 'styles/GlobalStyles';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <GlobalStyleComponent />
    </>
  );
};
