import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
