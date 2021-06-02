import React,{ Component } from 'react';
import axios from 'axios';
import FilmItem from './FilmItem/FilmItem';
import style from './Films.module.css';
import queryString from 'query-string';


class Films extends Component {
  state = {
    movie: [],
  }

  componentDidMount() {
    // const queryParams = this.props.query;
    // console.log(queryParams);
    // console.log('https://api.themoviedb.org/3/'+{queryParams}+'/popular?api_key=667e6c0579f71e858d539ca597385526&language=en-US&page1')
    // if(queryParams){
      axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=667e6c0579f71e858d539ca597385526&language=en-US&page1')
        .then(response => {
          this.setState({
            movie: response.data.results,
          });  
          console.log(this.state);
        })
        .catch(error => {
          console.log(error);
        });
      // }
  }
  render(){
    const { movie } = this.state;
    return (
      <>
        <div className = {`${style.container} ${style.fix_bag_height}`}>
          <ul className={style.gallery}>
          {movie.map((item) => (
            <FilmItem 
              name={item.name} 
              path={item.backdrop_path}
              original_title={item.original_title}
              release_date={item.release_date}
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