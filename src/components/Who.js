import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import BottomNav from './BottomNav.jsx';
import Background from '../images/lionfish_1.jpg';
import '../App.css';

class Who extends Component  {
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

    const test = {
      flex: '1 1 0%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }

    const carouselContainer = {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgb(255, 255, 255)',
      justifyContent: 'flex-start',
      width: '100vw',
      padding: '3vh 10vw 6vh'
    }

    const slides = {
      justifyContent: 'center',
      alignItems: 'center',
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
                  <p style={headline}>Who We are</p>
                    <div style={underscore}> </div>
                    <p style={paras}> to our great sponsors </p>
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
        <div className="carouselContainer" style={carouselContainer}>
        <Carousel style={slides}>
        <Carousel.Item>
        <div className="col-md-4">
                <div className="card mb-2">
                    <div >
                    <img width={900} height={500} alt="900x500" src={Background} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <a className="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={Background} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={Background}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
        <BottomNav />
        <Footer />
      </div>
    );
  }
}

export default Who;
