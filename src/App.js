import React,{ Component } from 'react';
import Categories from './componenets/Categories/Categories';
import './componenets/Header/Header';
import Header from './componenets/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <>
        <Router>
          <Header />
          <Categories />
        </Router>
      </>
    );

  }
}

export default App;
