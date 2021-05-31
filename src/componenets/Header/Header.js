import React,{ Component } from 'react';
import style from './Header.module.css'
import LogoImg from "../../assets/images/Logo.png";

class Header extends Component {

  render(){
    return (
      <header className={style.head}>
        <nav className={style.head__nav}>
          <ul className={style.head__list}>
            <li className={style.head__item}>
              <a href="/" className={style.head__link_logo}>
                <img src={LogoImg} alt="Logo" />
              </a>
            </li>
          </ul>
          <a className={style.head__search} href="/">
            <form className={style.headerSearch}>
                <input className={style.headerSearch_iteam_btn_submit} type="submit" value=" " />
                <input
                  name="film"
                  className={style.headerSearch_iteam_btn_search}
                  type="text"
                  placeholder="Search"
                />
              </form>
            <div className={style.lightbox}>
              <div className={style.lightbox_iteam}>
                <p className={style.lightbox_iteam_text}>Mooogle</p>
              </div>
              <form className={style.lightbox_iteam_btn}>
                <input className={style.lightbox_iteam_btn_submit} type="submit" value=" " />
                <input
                  name="film"
                  className={style.lightbox_iteam_btn_search}
                  type="text"
                  placeholder="Search"
                  autocomplete="off"
                />
              </form>
            </div>
            <div className={style.lightbox_shadow}></div>
          </a>
        </nav>
      </header>
    );
  }
}
export default Header;