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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    padding: '30vh 15px 40px',
    flexDirection: 'column',
    }

    const still = {
      display: 'flex',
      flex: '1 1 0%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }

    const image = {
      position: 'absolute',
      height: '100%',
      width: '400%',
      zIndex: '-1',
      backgroundSize: 'auto 300%',
      backgroundRepeat: 'no-repeat',
      animationName: image,
      animationDuration: '30s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      flex: '0 1 0%',
      backgroundImage: `url(${Background})`,
    }

    return (
        <div style={image}>   </div>
    );
  }
}

export default Sponsors;
