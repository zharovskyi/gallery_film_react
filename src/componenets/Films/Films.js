import React,{ Component } from 'react';
import axios from 'axios';
import FilmItem from '../FilmItem/FilmItem';

class Films extends Component {
  state = {
    movie: []
  }
  componentDidMount() {
    axios
      .get('https://api.themoviedb.org/3/tv/popular?api_key=667e6c0579f71e858d539ca597385526&language=en-US&page1')
      .then(response => {
        this.setState({
          movie: response.data.results,
        });  
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });

  }
  render(){
    const { movie } = this.state;
    return (
      <>
        {/* hello {movie.length} */}
        <ul className="gallery">
        {movie.map((item) => (
          <FilmItem 
            name={item.name} 
            path={item.backdrop_path}
            />
        ))}
        </ul>
        {/* <FilmItem /> */}
      </>
    );
  }
}
export default Films;