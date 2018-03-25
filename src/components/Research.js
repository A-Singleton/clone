import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import BottomNav from './BottomNav.jsx';

class Research extends Component  {
  render(){
    return (
      <div>
      <NavBar />
          <h1> Research </h1>
      <Footer />
      <BottomNav />
      </div>
    );
  }
}

export default Research;
