import React,{ useState} from 'react';
import style from './FilmItem.module.css';
import sprite from '../../assets/images/sprite.svg';


export default function FilmItem ({ 
  id, 
  path, 
  original_title, 
  original_name, 
  release_date, 
  first_air_date, 
  vote_average, 
  addFavorite,
}) {

  const [isStarChecked, setStarChecked] = useState(false);

  const setStar = () => {
    setStarChecked(v=>!v);
  }

  const handleClick = (e) => {
    setStar();
    addFavorite(+e.currentTarget.dataset.id);
  }
  return(
    <>
      <li key = {id} className={style.movie}>
          {path
            ? <img className={style.movie_logo} src={"https://image.tmdb.org/t/p/w500"+ path} alt="movie-title" />
            : <img className={style.movie_logo} src="https://image.tmdb.org/t/p/w500/1R68vl3d5s86JsS2NPjl8UoMqIS.jpg" alt="movie-title" />
          }
        <p className={style.movie_title}>
          {original_title && original_title} {release_date  && '( ' + release_date + ' )' }
          {original_name && original_name} { first_air_date && '( ' + first_air_date + ' )' }
        </p>
        <div>
          <svg className={style.svg_bell} data-id={id}>
            <use className={style.subscription_Bell} href={sprite + "#bell"}></use>
          </svg>
        </div>
        
          <div  onClick={handleClick} data-id={id}>
            <svg className={style.svg_star} fill = {isStarChecked ? "#77c1bb" : "#fff"}>
              <use
                className={style.use} 
                href={sprite + "#star-full"} 
              ></use>
            </svg>
          </div>
          <p className={style.average}>
            {vote_average}
          </p>
      </li>
    </>

  )
}
