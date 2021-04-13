import React from 'react'
import './App.css';
import { Redirect, Route } from 'react-router-dom';
import Home from './components/Home'
import Favourites from './components/Favourites'
import About from './components/About'
import Settings from './components/Settings'

function App () {
  return (
    <div>
      <p>Nav Bar</p>
      <>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home' component={Home} />
        <Route exact path='/favourites' component={Favourites} />
        <Route exact path='/about' component={About} />
        <Route exact path='/settings' component={Settings} />
      </>
    </div>
  );
}

export default App;

// Home
// Favourites
// About
// Settings

