import React,{ Component } from 'react';
import style from './Categories.module.css';
import {Switch, NavLink, Route,Redirect,withRouter} from "react-router-dom";
import Films from '../Films/Films';
import Favourite from '../Favourite/Favourite';

const Nav = () => (
  <>
    <NavLink exact to="/movie" className={style.nav__main} activeClassName={style.activeLink}
>MOVIES</NavLink>
    <NavLink exact to="/tv" className={style.nav__main} activeClassName={style.activeLink}>TV SERIES</NavLink>
    <NavLink to="/favorite" className={style.nav__main} activeClassName={style.activeLink}>FAVORITES</NavLink>
  </>
);

export default function Categories() {
  return (
    <>
      <nav className={style.nav__film}>
        <Nav />
      </nav>
      <Switch>
        <Route exact path="/movie" >
          <Films query="movie"/>
        </Route>
        <Route exact path="/tv" >
          <Films query="tv"/>
        </Route>
        <Route path="/favorite">
          <Films query="favorite"/>
        </Route>
        <Redirect to="/movie" />
      </Switch>
    </>
  );
};
