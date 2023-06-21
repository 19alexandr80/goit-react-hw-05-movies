import { useState, useEffect } from 'react';
import { Routes, NavLink, Route, Link, Outlet } from 'react-router-dom';

import { NewApi } from 'API/Api';
const api = new NewApi();

export const App = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const getApi = async () => {
      setStatus(true);
      try {
        const data = await api.getUser(page);

        setList(prev => {
          return [...prev, ...data.results];
        });
      } catch (error) {
        console.error(error.messeng);
      } finally {
        setStatus(false);
        return;
      }
    };
    getApi();
  }, []);
  console.log(list);
  // const fun = async () => {
  //   try {
  //     // const data = await api.getUser();
  //     // setList(prev => {
  //     //   return [...prev, ...data.results];
  //     // });
  //     console.log(list);
  //   } catch (error) {
  //     console.error(error.messeng);
  //   }
  // };
  // fun();
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
          <li>
            <NavLink to="/movies/:movieId">MovieDetails</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>HOME PAGE</div>} />
        <Route path="/movies" element={<div>MOVIES</div>} />
        <Route
          path="/movies/:movieId"
          element={
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
          }
        >
          <Route path="cast" element={<div>CAST</div>} />
          <Route path="reviews" element={<div>REVIEWS</div>} />
        </Route>
      </Routes>
    </div>
  );
};
