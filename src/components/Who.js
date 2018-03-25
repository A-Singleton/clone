import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import BottomNav from './BottomNav.jsx';

class Who extends Component  {
  render(){
    return (
      <div>
        <NavBar />
          <h1> Who We are</h1>
        <BottomNav />
        <Footer />
      </div>
    );
  }
}

export default Who;
