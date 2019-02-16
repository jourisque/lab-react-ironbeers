import React, { Component } from 'react';
import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import HomePage from './components/HomePage';
import RandomBeers from './components/RandomBeers';
import NewBeer from './components/NewBeer';
import Beers from './components/Beers';

class App extends Component {
  render() {
    return (
      
      <div className="App container">

      <nav className="level">
        <p className="level-item has-text-centered">
          <NavLink exact to="/" className="link is-info">Home</NavLink>
        </p>
        <p className="level-item has-text-centered">
         <NavLink to="/beers">Beer List</NavLink>
        </p>
        
        <p className="level-item has-text-centered">
         <NavLink to="/random-beers">Random beers</NavLink>
        </p>
        <p className="level-item has-text-centered">
         <NavLink to="/new-beer">Add a beer</NavLink>
        </p>
      </nav>
      
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route  path="/beers" component={Beers} /> 
          <Route  path="/random-beers" component={RandomBeers} /> 
          <Route  path="/new-beer" component={NewBeer} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
       
        
       
       

