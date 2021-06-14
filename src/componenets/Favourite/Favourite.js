import React,{ Component } from 'react'
import style from './Favourite.module.css';
import FilmItem from '../FilmItem/FilmItem';

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
          {/* {movie.map((item) => ( */}
            <FilmItem />
          {/* ))} */}
          </ul>
        </div>
        </>
      );
    };
  };

export default Favourite;