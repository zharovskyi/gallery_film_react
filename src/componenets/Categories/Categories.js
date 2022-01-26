import React from 'react';
import style from './Categories.module.css';
import { useState, useEffect } from 'react';
import movieAPI from '../../services/film-api';
import {NavLink} from "react-router-dom";
import Films from '../Films/Films';


const Nav = () => (
  <>
    <NavLink exact to="/movie" className={style.nav__main} activeClassName={style.activeLink}>
      MOVIES
    </NavLink>
    <NavLink to="/tv" className={style.nav__main} activeClassName={style.activeLink}>
      TV SERIES
    </NavLink>
    <NavLink to="/favorite" className={style.nav__main} activeClassName={style.activeLink}>
      FAVORITES
    </NavLink>
  </>
);

export default function Categories({
  query,
  addFavorite,
  favorites,
  setFavorite,
  movieFilms,
  setMovie,
}) {
  useEffect(() => {
    if(query === 'favorite') {
      // return;
      setMovie(favorites);
      // return;
    } else {
      movieAPI
      .fetchMovies(query)
      .then(movie => {
        setMovie(movie.results);
      })
      .catch(error => {
        console.log(error);
      });
    }
    
  }, [query,favorites]);

  return (
    <>
      <nav className={style.nav__film}>
        <Nav />
      </nav>
      <Films 
        setMovie={setMovie}
        movieFilms = {movieFilms}
        addFavorite = {addFavorite}
        favorites={favorites}
        setFavorite={setFavorite}
      />
    </>
  );
};
