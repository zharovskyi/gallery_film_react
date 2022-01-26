import React,{ useState } from 'react';
import Categories from './componenets/Categories/Categories';
import './componenets/Header/Header';
import Header from './componenets/Header/Header';
import { BrowserRouter, Route,Switch, NavLink,Redirect } from 'react-router-dom';
import Footer from './componenets/Footer/Footer';

const tabs = ['movie','tv','favorite'];

export default function App() {
  const [movieFilms, setMovie] = useState([]);
  const [favorites, setFavorite] = useState([]);

  const addFavorite = (idFilm) => {
    favorites && 
      // debugger;
      favorites.some( item => item.id === idFilm)
        ? setFavorite(favorites.filter(i => i.id !== idFilm) )// remove item
        : setFavorite([...favorites,...movieFilms.filter(item =>item.id === idFilm)]); //add item
  };
 
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {tabs.length && tabs.map((item,index) => (
            <Route exact path={`/${item}` } key={index}>
              <Categories 
                query={item}
                favorites ={favorites}
                setFavorite={setFavorite}
                movieFilms = {movieFilms}
                setMovie = {setMovie}
                addFavorite={addFavorite}
              />
            </Route>
            )
          )}
          <Redirect to="/movie" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}