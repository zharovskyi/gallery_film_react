import React from 'react';
import style from './FilmItem.module.css'

const FilmItem = ({name,path}) => (
  <>
    <li className={style.movie} data-id="{{id}}">
      {/* <a href=""> */}
        {/* {{#if backdrop_path}} */}
        {/* {name} */}
        <img className={style.movie_logo} src={"https://image.tmdb.org/t/p/w500"+path} alt="movie-title" />
        {/* {{else}} */}
        {/* <img className={style.movie-logo" src="../img/not-found.png" alt="movie-title" /> */}
        {/* {{/if}} */}

      {/* </a> */}
      <p className={style.movie_title}>
        {name}
        {/* {{#if title}} */}
        {/* {{title }} ({{release_date}}) */}
        {/* {{else}} */}
        {/* {{name }} ({{first_air_date}}) */}
        {/* {{/if}} */}
      </p>
      <svg className={style.svg_bell}>
        {/* <use className={style.subscription_Bell} href="../img/sprite.svg#bell"></use> */}
      </svg>
      {/* {{#if favorites}} */}
      {/* <svg className={style.svg-star svg-green}> */}
        {/* {{else}} */}
        {/* <svg className={style.svg-star}> */}
          {/* {{/if}} */}
          {/* <use className={style.use} data-id="{{id}}" href="../img/sprite.svg#star-full"></use> */}
        {/* </svg> */}
        <p className={style.average}>
          {/* {{vote_average}} */}
        </p>
    </li>
 
  </>
)
export default FilmItem;