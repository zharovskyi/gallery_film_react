import React from 'react';
import style from './FilmItem.module.css';
import sprite from '../../assets/images/sprite.svg';

const FilmItem = ({ id, path, original_title, original_name, release_date, first_air_date, vote_average,handleClick}) => (
  <>
    <li className={style.movie} key={id}>
      {/* <a href=""> */}
        {/* {{#if backdrop_path}} */}
        {/* {name} */}
        <img className={style.movie_logo} src={"https://image.tmdb.org/t/p/w500"+path} alt="movie-title" />
        {/* {{else}} */}
        {/* <img className={style.movie-logo" src="../img/not-found.png" alt="movie-title" /> */}
        {/* {{/if}} */}

      {/* </a> */}
      <p className={style.movie_title}>
        {original_title && original_title} {release_date  && '( ' + release_date + ' )' }
        {original_name && original_name} { first_air_date && '( ' + first_air_date + ' )' }
      </p>
      <svg className={style.svg_bell} data-id={id}>
        <use className={style.subscription_Bell} href={sprite + "#bell"}></use>
      </svg>
      {/* {{#if favorites}} */}
      {/* <svg className={style.svg-star svg-green}> */}
        {/* {{else}} */}
        {/* <button class={style.btn} data-id={id} > */}
          <svg className={style.svg_star}>
            <use className={style.use} data-id={id} href={sprite + "#star-full"} onClick={handleClick}></use>
          </svg>
        {/* </button> */}
        <p className={style.average}>
          {vote_average}
        </p>
    </li>
  </>
)
export default FilmItem;