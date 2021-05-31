import React,{ Component } from 'react';
import style from './Categories.module.css';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import FilmItem from '../FilmItem/FilmIem';

const Nav = () => (
  <>
    <NavLink exact to="movie" className={style.nav__main} data-type="movie">MOVIES</NavLink>
    <NavLink to="tv" className={style.nav__main} data-type="movie" >TV SERIES</NavLink>
    <NavLink to="favorite" className={style.nav__main} data-type="favorite" >FAVORITES</NavLink>
  </>
);
class Categories extends Component {
  render(){
    return (
      <>
        <nav className={style.nav__film}>
        {/* <Nav render = {() => {
        }}
        /> */}
        <Nav />
          {/* <FilmItem />
        </Route> */}
        {/* <Route exact path="/" component={Movies}/> */}
          {/* <NavLink exact to="movie" className={style.nav__main} data-type="movie" component={Movies}>MOVIES</NavLink>
          <NavLink to="tv" className={style.nav__main} data-type="movie" component={FilmItem}>TV SERIES</NavLink>
          <NavLink to="favorite" className={style.nav__main} data-type="favorite" component={FilmItem}>FAVORITES</NavLink> */}
        </nav>
        <Route exact path="/movie" component = {FilmItem} />
        <Route path="/tv" component = {FilmItem} />
        <Route path="/favorite" component = {FilmItem} />
      </>
    );
  }
}
export default Categories;