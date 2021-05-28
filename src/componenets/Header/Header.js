import React,{ Component } from 'react';
import style from './Header.module.css'

class Header extends Component {

  render(){
    return (
      <header className={style.head}>
        <nav className={style.head__nav}>
        <ul className={style.head__list}>
          <button className={style['head__item, burger__button']}>
            <a href="/" className={style.head__link}>
              <svg className="whitepeper-svg">
                <use href="../img/header.svg#menu"></use>
              </svg>
            </a>
          </button>
          <li className="head__item">
            <a href="./index.html" className="head__link-logo">
              <img className="head__logo-img" src="../img/2-layers.png" alt="" />
            </a>
          </li>
        </ul>
        <a className="head__search" href="#">
          <svg className="search-svg">
            <use href="../img/symbol-defs.svg#icon-search"></use>
          </svg>
          <form className="headerSearch">
              <input className="headerSearch_iteam_btn_submit" type="submit" value=" " />
              <input
                name="film"
                className="headerSearch_iteam_btn_search"
                type="text"
                placeholder="Search"
                autocomplete="off"
              />
            </form>
          <div className="lightbox">
            <div className="lightbox_iteam">
              <p className="lightbox_iteam_text">Mooogle</p>
            </div>
            <form className="lightbox_iteam_btn">
              <input className="lightbox_iteam_btn_submit" type="submit" value=" " />
              <input
                name="film"
                className="lightbox_iteam_btn_search"
                type="text"
                placeholder="Search"
                autocomplete="off"
              />
            </form>
          </div>
          <div className="lightbox_shadow"></div>
        </a>
      </nav>
    </header>
    );
  }
}
export default Header;