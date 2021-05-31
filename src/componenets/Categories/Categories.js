import React,{ Component } from 'react';
import style from './Categories.module.css'

class Categories extends Component {
  render(){
    return (
      <nav className={style.nav__film}>
        <a className={style.nav__main} data-type="movie" href="/">MOVIES</a>
        <a className={style.nav__main} data-type="tv" href="/">TV SERIES</a>
        <a className={style.nav__main} data-type="favorite" href="/">FAVORITES</a>
      </nav>
    );
  }
}
export default Categories;