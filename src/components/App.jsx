// import { useState, useEffect } from 'react';
import { Routes, NavLink, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import FilmePage from 'components/filmParams/FilmParams';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<div>MOVIES</div>} />
        <Route path="/:movieId" element={<FilmePage />}>
          <Route path="cast" element={<div>CAST</div>} />
          <Route path="reviews" element={<div>REVIEWS</div>} />
        </Route>
      </Routes>
    </div>
  );
};
