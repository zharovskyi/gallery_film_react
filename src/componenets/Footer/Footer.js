import React from 'react';
import style from './Footer.module.css';
import sprite from '../../assets/images/sprite-footer.svg';

const Footer = () => (
  <>
    <footer className={style.footer}>
      <ul className={style.footer_socialIcons}>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <svg className={style.footer_socialIcons_item}>
              <use href={sprite + "#facebook-logo-button"}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <svg className={style.footer_socialIcons_item}>
              <use href={sprite + "#play-button-silhouette"}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <svg className={style.footer_socialIcons_item}>
              <use href={sprite + "#twitter"}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <svg className={style.footer_socialIcons_item}>
              <use href={sprite + "#social-instagram-circle"}></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  </>
)
export default Footer;