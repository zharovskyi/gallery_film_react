import React from 'react';
import { useState, useEffect } from 'react';
import movieAPI from '../../services/film-api';
import style from './Films.module.css';
import FilmItem from '../FilmItem/FilmItem';

export default function Films({query}) {
  const [movieFilms, setMovie] = useState([]);  
  const [favoriteMovie, setFavoriteMovie] = useState([]);

  useEffect(() => {
    if(query === 'favorite') {
      const movieLocalStorage = JSON.parse(window.localStorage.getItem('idFilms'));
      console.log('movieLocalStorage',movieLocalStorage);
      
      if(movieLocalStorage) {
        setMovie([...new Set(movieLocalStorage)]);
      }
    }else {
      movieAPI
      .fetchMovies(query)
      .then(movie => {
        setMovie(movie.results);
      })
      .catch(error => {
        console.log(error);
      });
    }
    
  }, [query]);

  const handleClick = (e) => {    
    movieFilms.map((item) => {
      if(Number(item.id) === Number(e.currentTarget.dataset.id)) {
        setFavoriteMovie([...favoriteMovie,item]);
        window.localStorage.setItem('idFilms', JSON.stringify([...new Set(favoriteMovie)]));
      }
    });
  }

  return (
    <>
      <div className = {`${style.container} ${style.fix_bag_height}`}>
        <ul className = {style.gallery}>
          {movieFilms && movieFilms.map((item) => (
            <FilmItem 
              key = {item.id}
              id={item.id}
              name={item.name} 
              path={item.backdrop_path}
              original_title={item.original_title}
              original_name={item.original_name}
              release_date={item.release_date}
              first_air_date={item.first_air_date}
              vote_average={item.vote_average}
              handleClick={handleClick}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
