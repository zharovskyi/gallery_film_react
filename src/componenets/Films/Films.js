import React,{ useState} from 'react';
import style from './Films.module.css';
import FilmItem from '../FilmItem/FilmItem';

export default function Films({
  addFavorite,
  favorites,
  setFavorite,
  setMovie,
  movieFilms
}) {
  // const isStarCheck = () => {
  //   movieFilms.forEach(item => item.setToggle=false)
  // }
  return (
    <>
      <div className = {`${style.container} ${style.fix_bag_height}`}>
        <ul className = {style.gallery}>
          {movieFilms && movieFilms.map((item,index) => (
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
              addFavorite = {addFavorite}
              favorites={favorites}
              setFavorite={setFavorite}
              setMovie={setMovie}
              movieFilms = {movieFilms}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
