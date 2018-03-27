import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import BottomNav from './BottomNav.jsx';
import Background from '../images/lionfish_1.jpg';
import '../App.css';

class Research extends Component  {
  render(){

    const jumbo = {
      marginTop: '0px',
      padding: '0px',
      height: '100vh',
      marginBottom: '0px',
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

    const inner = {
    display: 'flex',
    flex: '1 1 0%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    padding: '30vh 15px 40px',
    flexDirection: 'column',
    }

    const reveal = {
      flex: '1 1 0%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingLeft: '8px',
      paddingRight: '20vw',
      opacity: '1',
    }

    const headline = {
      wordBreak: 'keep-all',
      fontSize: '10vw',
      color: 'rgb(255, 255, 255)',
      fontWeight: '600',
      lineHeight: '94%',
      marginBottom: '10px',
      textAlign: 'start',
    }

    const image = {
      flex: '0 1 0%',
      backgroundImage: `url(${Background})`
    }

    const underscore = {
      marginTop: '5px',
      minWidth: '88px',
      minHeight: '5px',
      maxWidth: '88px',
      maxHeight: '5px',
      flex: '0 1 0%',
      display: 'flex',
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

    const problem = {
      backgroundColor: 'rgb(28, 51, 92)',
      flex: '1 1 0%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '100vw',
      paddingTop: '9vh',
      paddingBottom: '5em',
      opacity: '1',
    }

    const subtitle = {
      wordBreak: 'keep-all',
      overflowWrap: 'normal',
      fontSize: '30px',
      color: 'rgb(255, 255, 255)',
      letterSpacing: '2px',
      lineHeight: '110%',
      fontWeight: '600',
      marginBottom: '10px',
      opacity: '1',
    }

    const paras = {
      color: 'rgba(255, 255, 255, 0.4)',
      fontSize: '20px',
      marginTop: '30px',
      fontFamily: 'Prompt',
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
                        <p style={headline}>Research</p>
                          <div style={underscore}> </div>
                      </div>
                    </div>
                    <div style={bottomButton}>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sponsors" className="sponsors" style={problem}>
                <div style={underscore}>
                </div>
                <br/>
                <h1 style={subtitle}> THE LIONFISH PROBLEM </h1>
                <p style={paras}> Lionfish need to be gotten rid of honestly </p>
              </div>
      <Footer />
      <BottomNav />
      </div>
    );
  }
}

export default Research;
