import React,{ Component } from 'react';
import style from './Categories.module.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import FilmItem from '../FilmItem/FilmIem';

class Categories extends Component {
  render(){
    return (
      <>
        <nav className={style.nav__film}>
          <NavLink exact to="movie" className={style.nav__main} data-type="movie">MOVIES</NavLink>
          <NavLink to="tv" className={style.nav__main} data-type="movie">TV SERIES</NavLink>
          <NavLink to="favorite" className={style.nav__main} data-type="favorite">FAVORITES</NavLink>
        </nav>
        <FilmItem props="tv" />
      </>
    );
  }
}
export default Categories;