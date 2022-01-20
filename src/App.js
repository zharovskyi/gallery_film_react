import React,{ Component } from 'react';
import Categories from './componenets/Categories/Categories';
import './componenets/Header/Header';
import Header from './componenets/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './componenets/Footer/Footer';

class App extends Component {
  render () {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Categories />
          <Footer />
        </BrowserRouter>
      </>
    );

  }
}

export default App;
