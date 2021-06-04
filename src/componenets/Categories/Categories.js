import React,{ Component } from 'react';
import style from './Categories.module.css';
import {BrowserRouter as Router, NavLink, Route,Redirect} from "react-router-dom";
import Films from '../Films/Films';
import Favourite from '../Favourite/Favourite';

const Nav = () => (
  <>
    <NavLink exact to="/movie" className={style.nav__main} data-type="movie">MOVIES</NavLink>
    <NavLink to="/tv" className={style.nav__main} data-type="movie" >TV SERIES</NavLink>
    <NavLink to="/favorite" className={style.nav__main} data-type="favorite" >FAVORITES</NavLink>
  </>
);
class Categories extends Component {
 
  render(){
    return (
      <>
        <nav className={style.nav__film}>
          <Nav />
        </nav>
          <Route exact path="/movie" render={props => <Films {...props} query="movie" />} />
          <Route path="/tv" render={props => <Films {...props} query="tv" />} />
          <Route path="/favorite" component = {Favourite} />
          <Redirect to="/movie" />
      </>
    );
  }
}
export default Categories;