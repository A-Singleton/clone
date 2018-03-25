import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Fade from 'react-reveal/Fade';
import BottomNav from './BottomNav.jsx';

class Contact extends Component  {
  render(){
    return (
      <div>
      <NavBar />
        <Fade bottom>
          <h1> Contact </h1>
          <h2> team@amrc.io </h2>
        </ Fade>
        <BottomNav />
        <Footer />
      </div>
    );
  }
}

export default Contact;
