import React, { Component } from 'react';
import { Switch,BrowserRouter,Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import Home from './Home/';
import Book from './Book/';
import About from './About/';

class App extends Component {
  render() {
     return (<Provider>
            <BrowserRouter className="wrap">
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/Book" component={Book}></Route>
                  <Route exact path="/About" component={About}></Route> 
                </Switch>
            </BrowserRouter>
      </Provider>);
  }
}

export default App;
