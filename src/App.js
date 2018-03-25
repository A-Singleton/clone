import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Who from './components/Who.js';
import Research from './components/Research.js';
import Contact from './components/Contact.js';
import Sponsors from './components/Sponsors.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/who' component={Who} />
          <Route path='/research' component={Research} />
          <Route path='/sponsors' component={Sponsors} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
