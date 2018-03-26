import React, { Component } from 'react';
//import { Button, Jumbotron, Grid } from 'react-bootstrap'
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Fade from 'react-reveal/Fade';
import BottomNav from './BottomNav.jsx';
import Background from '../images/lionfish_1.jpg';
import '../App.css';

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
      backgroundImage: `url(${Background})`,
    }

    return (
        <div>
          <img src={Background} className="Moving-back" />
        </div>
    );
  }
}

export default Sponsors;
