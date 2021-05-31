import React,{ Component } from 'react';
import Categories from './componenets/Categories/Categories';
import './componenets/Header/Header';
import Header from './componenets/Header/Header';

class App extends Component {
  render () {
    return (
      <>
        <Header />
        <Categories />
      </>
    );

  }
}

export default App;
