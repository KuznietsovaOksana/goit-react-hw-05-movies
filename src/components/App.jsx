import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Movies } from 'pages/Movies/Movies';
import { Home } from 'pages/Home/Home';
import { GlobalStyleComponent } from 'styles/GlobalStyles';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
      <GlobalStyleComponent />
    </div>
  );
};

// - / Layout
// 		- /home
// 			trending list (по замовчуванню)
// 		- /movies
// 			(форма для пошуку)
// 			?query=batman
// 			- /:movieID
// 						- cast
//						- reviews
