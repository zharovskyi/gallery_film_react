import React,{ Component } from 'react';
import axios from 'axios';
import FilmItem from '../FilmItem/FilmItem';
import style from './Films.module.css';

const StartURL = 'https://api.themoviedb.org/3/';
const KEY = '/popular?api_key=667e6c0579f71e858d539ca597385526&language=en-US&page1';
class Films extends Component {
  state = {
    movie: [],
    idFilms: [],
  }

  componentDidMount() {
    const queryParams = this.props.query;
    if(queryParams){
      axios
        .get(StartURL+queryParams+KEY)
        .then(response => {
          this.setState({
            movie: response.data.results,
          });  
        })
        .catch(error => {
          console.log(error);
        });
      }
  }

  handleClick = (e) => {
    let target = e.target.tagName;
    if (target.toLowerCase() === "use" && target !== undefined) {
      this.setState(({idFilms}) => ({
        idFilms: [...idFilms, e.target.dataset.id],
      }));
      localStorage.setItem('id', JSON.stringify(this.state.idFilms));
    }
  }
  render(){
    const { movie, idFilms } = this.state;
    return (
      <>
        <div className = {`${style.container} ${style.fix_bag_height}`}>
          <ul className={style.gallery} onClick={this.handleClick}>
          {movie.map((item) => (
            <FilmItem 
              id={item.id}
              name={item.name} 
              path={item.backdrop_path}
              original_title={item.original_title}
              original_name={item.original_name}
              release_date={item.release_date}
              first_air_date={item.first_air_date}
              vote_average={item.vote_average}
              
              />
          ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Films;