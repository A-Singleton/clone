import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Fade from 'react-reveal/Fade';
import BottomNav from './BottomNav.jsx';
import Background from '../images/lionfish_1.jpg';
import '../App.css';

class Contact extends Component  {
  render(){

    const jumbo = {
      marginTop: '0px',
      padding: '0px',
      height: '100vh',
      marginBottom: '0px',
      textAlign: 'center',
      alignItems: 'center'
    }

    const still = {
      display: 'flex',
      flex: '1 1 0%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'relative',
      height: '100%',
      width: '100%',
      zIndex: '1',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat'
    }

    const image = {
      flex: '0 1 0%',
      backgroundImage: `url(${Background})`
    }

    const reveal = {
      flex: '1 1 0%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: '8px',
      paddingRight: '20vw',
      opacity: '1',
    }

    const inner = {
    display: 'flex',
    flex: '1 1 0%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30vh 15px 40px',
    flexDirection: 'column',
    }

    const underscore = {
      marginTop: '5px',
      minWidth: '88px',
      minHeight: '5px',
      maxWidth: '88px',
      maxHeight: '5px',
      backgroundColor: 'rgb(255, 255, 255)',
    }

    const bottomButton = {
      flex: '0 1 0%',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: '1',
    }


    return (
      <div>
      <NavBar />
      <div className="jumbotron" style={jumbo}>
        <div className="still" style={still}>
          <div className="Moving-back" style={image}>
          </div>
          <div style={inner}>
            <div className="inner" style={reveal}>
              <div >
              <Fade bottom>
                <h1> Contact </h1>
                <div style={underscore}> </div>
                <h2> team@amrc.io </h2>
              </ Fade>
              </div>
            </div>
            <div style={bottomButton}>
            </div>
          </div>
        </div>
      </div>
        <BottomNav />
        <Footer />
      </div>
    );
  }
}

export default Contact;
