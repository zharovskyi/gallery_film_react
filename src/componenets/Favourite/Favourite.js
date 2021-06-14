import React,{ Component } from 'react'
import style from './Favourite.module.css';
import FilmItem from '../FilmItem/FilmItem';
import axios from 'axios';

const StartURL = 'https://api.themoviedb.org/3/find/';
const KEY = '/popular?api_key=667e6c0579f71e858d539ca597385526&language=en-US&external_source=imdb_id';

// https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id

class Favourite extends Component {
  state = {}

  componentDidMount() {
    const idFilmsArray = JSON.parse(localStorage.getItem('id'));
    console.log(idFilmsArray);
  }
  
    render() {
      return (
        <>
          favourite
          <div className = {`${style.container} ${style.fix_bag_height}`}>
          <ul className={style.gallery} onClick={this.handleClick}>
          {/* {movie.map((item) => ( 
            <FilmItem />
           ))} */}
          </ul>
        </div>
        </>
      );
    };
  };

export default Favourite;