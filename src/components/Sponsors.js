import React, { Component } from 'react';
import { Button, Jumbotron, Grid } from 'react-bootstrap'
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Fade from 'react-reveal/Fade';
import BottomNav from './BottomNav.jsx';
import Background from '../images/lionfish_1.jpg';

//import logo from './logo.svg';

class Sponsors extends Component  {
  render(){

    const jumbo = {
      marginTop: '0px',
      padding: '0px',
      height: '100vh',
      marginBottom: '0px',
    }

    const inner = {
      display: 'flex',
      flex: '1 1 0%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }

    const image = {
      position: 'absolute',
      height: '100%',
      width: '200%',
      zIndex: '-1',
      backgroundSize: 'auto 180%',
      backgroundRepeat: 'no-repeat',
      flex: '0 1 0%',
      backgroundImage: `url(${Background})`,
    }

    return (
    <div>
        <div style={image}>
          <Jumbotron>
            <Fade bottom>
              <h1> Thank You </h1>
              <h2> To our amazing sponsors! </h2>
            </ Fade>
          </Jumbotron>
        </div>
      <BottomNav />
      <Footer />
    </div>
    );
  }
}

export default Sponsors;
