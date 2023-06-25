// import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

// import { NewApi } from 'API/Api';
// const api = new NewApi();

const FilmePage = () => {
  const params = useParams();
  console.log('params', params);
  return (
    <div>
      <h2>MovieDetails</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default FilmePage;
