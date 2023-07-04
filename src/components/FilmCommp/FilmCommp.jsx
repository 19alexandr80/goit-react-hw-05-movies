import { Link } from 'react-router-dom';
import def from 'image/default.png';
import PropTypes from 'prop-types';

import {
  FilmContainerStyled,
  FilmDiccriptionStyled,
  HeaderStyled,
  ParagrafStyled,
  ListSubCategoriesStyled,
  LiStyled,
} from 'components/FilmCommp/FilmStyled.styled';

export const FilmCommp = ({ film }) => {
  return (
    <>
      <FilmContainerStyled>
        <img
          src={
            film.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${film.backdrop_path}`
              : def
          }
          alt=""
          width="370"
        />
        <FilmDiccriptionStyled>
          <h2>
            {film.original_name ? film.original_name : film.original_title}
          </h2>
          <div>
            <HeaderStyled>Genres</HeaderStyled>
            <ParagrafStyled>
              {film.genres ? (
                film.genres.map(g => {
                  return <span key={`${g.id}`}> {g.name} </span>;
                })
              ) : (
                <span>Genres</span>
              )}
            </ParagrafStyled>
          </div>

          <div>
            <HeaderStyled>Overview</HeaderStyled>
            <ParagrafStyled>{film.overview}</ParagrafStyled>
          </div>
        </FilmDiccriptionStyled>
      </FilmContainerStyled>
      <ListSubCategoriesStyled>
        <LiStyled>
          <Link to="cast" style={{ textDecoration: 'none', color: 'black' }}>
            Cast
          </Link>
        </LiStyled>
        <LiStyled>
          <Link to="reviews" style={{ textDecoration: 'none', color: 'black' }}>
            Reviews
          </Link>
        </LiStyled>
      </ListSubCategoriesStyled>
    </>
  );
};

FilmCommp.propTypes = {
  film: PropTypes.shape({
    backdrop_path: PropTypes.string,
    original_name: PropTypes.number,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
