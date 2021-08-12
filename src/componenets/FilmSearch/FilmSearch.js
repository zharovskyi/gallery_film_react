import React,{ Component } from 'react';
import styles from './FilmSearch.module.css';

const FilmSearch = ({ value, onChangeFilter }) => (
  <input
      type="text"
      name="film"
      className={styles.input}
      placeholder="Search..."
      value={value}
      onChange={onChangeFilter}
  />
);
export default FilmSearch;
