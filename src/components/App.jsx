import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout';

const HomePage = lazy(() => {
  return import('../pages/HomePage');
});
const FilmePage = lazy(() => {
  return import('../pages/FilmParams');
});
const Movies = lazy(() => {
  return import('../pages/Movies');
});
const Cast = lazy(() => {
  return import('./Cast/Cast');
});
const Reviews = lazy(() => {
  return import('./Reviews/Reviews');
});

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<FilmePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
