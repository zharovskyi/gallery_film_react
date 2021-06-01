import React,{ Component } from 'react';
import axios from 'axios';


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
      <ul>
        Hello
        {/* { this.state.movie.map(movie => <li>{movie.name}</li>)} */}
      </ul>
      </>
    );
  }
}
export default Films;