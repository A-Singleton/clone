import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Carousel } from 'react-bootstrap';
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

    const bioDiv = {
      display: 'flex',
      flex: '1 1 0%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '15px 5vw',
      flexDirection: 'column',
    }

    const bios = {
      backgroundColor: 'rgb(255, 255, 255)',
      flex: '1 1 0%',
      display: 'flex',
      margin: '20px',
      minHeight: '360px',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      opacity: '1',
    }

    const pic = {
      display: 'flex',
      flex: '1 1 0%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      backgroundImage:`url(${Background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      opacity: '1',
    }

    const role = {
      flex: '1 1 0%',
      backgroundColor: 'rgb(255, 255, 255)',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      opacity: '1',
    }

    const bar = {
      width: '88px',
      maxHeight: '8px',
      flex: '1 1 0%',
      display: 'flex',
      backgroundColor: 'rgb(20, 148, 201)',
      marginBottom: '-5px',
    }

    const bioText = {
        flex: '2 1 0%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        opacity: '1',
      }

      const bioP = {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: '14px',
        textAlign: 'start',
      }

  const name = {
    fontSize: '24px',
    letterSpacing: '1.2px',
    fontWeight: '600',
    textAlign: 'start',
    color: 'rgb(20, 148, 201)',
    marginBottom: '-2px',
  }

const title = {
  fontSize: '18px',
  letterSpacing: '1px',
  fontWeight: '400',
  textAlign: 'start',
  color: 'rgba(0, 0, 0, 0.6)',
}

const carouselGeneral = {
  flex: '1 1 0%',
  display: 'flex',
  minHeight: '65vh',
  maxHeight: '65vh',
  paddingLeft: '100px',
  paddingRight: '100px',
  margin: '2px',
}

const carPic = {
display: 'flex',
flex: '1 1 0%',
flexDirection: 'column',
maxHeight: '65vh',
backgroundImage:`url(${Background})`,
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
backgroundPosition: '50% 50%',
}

const a = {
  display: 'flex',
  flex: '1 1 0%',
  flexDirection: 'column',
  backgroundColor: 'rgb(255, 255, 255)',
  paddingBottom: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
}

const carName = {
    marginTop: '8px',
    fontSize: '24px',
    letterSpacing: '1.2px',
    fontWeight: '600',
    textAlign: 'start',
    color: 'rgb(63, 151, 142)',
    marginBottom: '-2px',
}

const b = {
  marginTop: '0px',
  minWidth: '88px',
  minHeight: '5px',
  maxWidth: '88px',
  maxHeight: '5px',
  flex: '1 1 0%',
  backgroundColor: 'rgb(63, 151, 142)',
}

const carTitle = {
    fontSize: '18px',
    letterSpacing: '1px',
    fontWeight: '400',
    textAlign: 'start',
    color: 'rgba(0, 0, 0, 0.6)'
}

const carPara = {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '14px',
    textAlign: 'start',
}

const scrollArea = {
  maxHeight: '70vh',
  paddingRight: '15px',
}

const scrollAreaInner ={
    marginTop: '0px',
    marginLeft: '0px',
}

const scroll = {
  height: '59.8017px',
  marginTop: '0px',
}

const navButtonPlacement = {
  flex: '0 1 0%',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  height: '60px',
  width: '60px',
  padding: '7px 10px 13px',
}

const navButton = {
  maxHeight: '40px',
  maxWidth: '40px',
}

    return (
      <div>
        <NavBar />
        <div className="jumbotron" style={jumbo}>
          <div className="still" style={still}>
            <div className="Moving-back" style={image}></div>
            <div style={inner}>
              <div className="inner" style={reveal}>
                <div >
                  <p style={headline}>Who We are</p>
                    <div style={underscore}> </div>
                </div>
              </div>
              <div style={bottomButton}>
                <a className="pulse" href="#bios" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
              </div>
            </div>
          </div>
        </div>
        <div id="bios" className="bios" style={bioDiv}>
          <div style={underscore}></div>
          <br/>
          <h1 style={subtitle}> THE LIONFISH PROBLEM </h1>
          <Fade left>
          <div style={bios}>
            <div style={pic} > </div>
              <div style={role}>
                <div style={bar}></div>
                <br/>
                <h3 style={name}> Yuan Wang </h3>
                <br/>
                <h4 style={title}> President </h4>
              </div>
                <div style={bioText}> <p style={bioP}>Yuan is a project manager, software engineer and mathematician who brings tech entrepreneurship experience and data-driven strategy to AMRC. Yuan offers both technical and nontechnical experience as well as a faith-driven mission to the group. Yuan holds a degree in mathematics from Princeton University, where he won $60,000 in prizes for puzzle solving and found success in entrepreneurship and programming competitions for startups in algorithmic medical triage to robotic bartending. In industry, Yuan has worked in data modeling, software engineering, and product management capacities at high powered firms in aerospace, computer vision, and global macro hedge funds. </p> </div>
          </div>
          </Fade>
          <Fade right>
          <div style={bios}>
                <div style={bioText}> <p style={bioP}>Yuan is a project manager, software engineer and mathematician who brings tech entrepreneurship experience and data-driven strategy to AMRC. Yuan offers both technical and nontechnical experience as well as a faith-driven mission to the group. Yuan holds a degree in mathematics from Princeton University, where he won $60,000 in prizes for puzzle solving and found success in entrepreneurship and programming competitions for startups in algorithmic medical triage to robotic bartending. In industry, Yuan has worked in data modeling, software engineering, and product management capacities at high powered firms in aerospace, computer vision, and global macro hedge funds. </p> </div>
                <div style={role}>
                  <div style={bar}></div>
                  <br/>
                  <h3 style={name}> Yuan Wang </h3>
                  <br/>
                  <h4 style={title}> President </h4>
                </div>
                <div style={pic} > </div>
          </div>
          </Fade>
          <Fade left>
          <div style={bios}>
            <div style={pic} > </div>
              <div style={role}>
                <div style={bar}></div>
                <br/>
                <h3 style={name}> Yuan Wang </h3>
                <br/>
                <h4 style={title}> President </h4>
              </div>
                <div style={bioText}> <p style={bioP}>Yuan is a project manager, software engineer and mathematician who brings tech entrepreneurship experience and data-driven strategy to AMRC. Yuan offers both technical and nontechnical experience as well as a faith-driven mission to the group. Yuan holds a degree in mathematics from Princeton University, where he won $60,000 in prizes for puzzle solving and found success in entrepreneurship and programming competitions for startups in algorithmic medical triage to robotic bartending. In industry, Yuan has worked in data modeling, software engineering, and product management capacities at high powered firms in aerospace, computer vision, and global macro hedge funds. </p> </div>
          </div>
          </Fade>
          <Fade right>
          <div style={bios}>
                <div style={bioText}> <p style={bioP}>Yuan is a project manager, software engineer and mathematician who brings tech entrepreneurship experience and data-driven strategy to AMRC. Yuan offers both technical and nontechnical experience as well as a faith-driven mission to the group. Yuan holds a degree in mathematics from Princeton University, where he won $60,000 in prizes for puzzle solving and found success in entrepreneurship and programming competitions for startups in algorithmic medical triage to robotic bartending. In industry, Yuan has worked in data modeling, software engineering, and product management capacities at high powered firms in aerospace, computer vision, and global macro hedge funds. </p> </div>
                <div style={role}>
                  <div style={bar}></div>
                  <br/>
                  <h3 style={name}> Yuan Wang </h3>
                  <br/>
                  <h4 style={title}> President </h4>
                </div>
                <div style={pic} > </div>
          </div>
          </Fade>
          <div style={bottomButton}>
            <a className="pulse" href="#carousel" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
          </div>
        </div>
        <div className="carouselContainer" style={carouselContainer}>
        <Carousel id="carousel" style={slides}>
        <Carousel.Item>
        <div style={carouselGeneral}>
          <div style={carPic}>
          </div>
          <div style={a}>
            <div style={b}>
            </div>
            <br/>
            <h3 style={carName}> Alex Fogg </h3>
            <br/>
            <h4 style={carTitle}> Marine Resources Coordinator </h4>
            <br/>
            <div style={scrollArea}>
              <div tabIndex='1' style={scrollAreaInner}>
                <p style={carPara}> Alex Fogg is the Marine Resource Coordinator for Okaloosa County, Florida.  His background in invasive lionfish stems from the implementation of a Gulf of Mexico wide life history study which required broad collaboration with Federal, State and local governments as well as local businesses and stakeholders throughout the Gulf of Mexico.  Alex received his BS degree from the University of South Carolina in 2011 and began his work career with NOAA in Pascagoula, Mississippi working on numerous Gulf of Mexico fisheries surveys following the Deepwater Horizon Oil Spill. Alex then transitioned to the University of Southern Mississippi where he earned his MS degree in Coastal Sciences in 2016 from his work on invasive lionfish life history in the northern Gulf of Mexico.  For the past 2.5 years, Alex has been the project manager for the Natural Resource Damage Assessment Artificial Reef Creation and Restoration Project with the Florida Fish and Wildlife Conservation Commission’s Artificial Reef Program.  This project was the largest artificial reef project in the history of Florida’s artificial reef program and upon completion will have deployed more than 3,000 new artificial reefs across northwest Florida.  Currently Alex is involved in numerous projects from sea turtle lighting initiatives to beach restoration and lionfish mitigation projects.  </p>
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={carouselGeneral}>
            <div style={carPic}>
            </div>
            <div style={a}>
              <div style={b}>
              </div>
              <br/>
              <h3 style={carName}> Alex Fogg </h3>
              <br/>
              <h4 style={carTitle}> Marine Resources Coordinator </h4>
              <br/>
              <div style={scrollArea}>
                <div tabIndex='1' style={scrollAreaInner}>
                  <p style={carPara}> Alex Fogg is the Marine Resource Coordinator for Okaloosa County, Florida.  His background in invasive lionfish stems from the implementation of a Gulf of Mexico wide life history study which required broad collaboration with Federal, State and local governments as well as local businesses and stakeholders throughout the Gulf of Mexico.  Alex received his BS degree from the University of South Carolina in 2011 and began his work career with NOAA in Pascagoula, Mississippi working on numerous Gulf of Mexico fisheries surveys following the Deepwater Horizon Oil Spill. Alex then transitioned to the University of Southern Mississippi where he earned his MS degree in Coastal Sciences in 2016 from his work on invasive lionfish life history in the northern Gulf of Mexico.  For the past 2.5 years, Alex has been the project manager for the Natural Resource Damage Assessment Artificial Reef Creation and Restoration Project with the Florida Fish and Wildlife Conservation Commission’s Artificial Reef Program.  This project was the largest artificial reef project in the history of Florida’s artificial reef program and upon completion will have deployed more than 3,000 new artificial reefs across northwest Florida.  Currently Alex is involved in numerous projects from sea turtle lighting initiatives to beach restoration and lionfish mitigation projects.  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div style={carouselGeneral}>
          <div style={carPic}>
          </div>
          <div style={a}>
            <div style={b}>
            </div>
            <br/>
            <h3 style={carName}> Alex Fogg </h3>
            <br/>
            <h4 style={carTitle}> Marine Resources Coordinator </h4>
            <br/>
            <div style={scrollArea}>
              <div tabIndex='1' style={scrollAreaInner}>
                <p style={carPara}> Alex Fogg is the Marine Resource Coordinator for Okaloosa County, Florida.  His background in invasive lionfish stems from the implementation of a Gulf of Mexico wide life history study which required broad collaboration with Federal, State and local governments as well as local businesses and stakeholders throughout the Gulf of Mexico.  Alex received his BS degree from the University of South Carolina in 2011 and began his work career with NOAA in Pascagoula, Mississippi working on numerous Gulf of Mexico fisheries surveys following the Deepwater Horizon Oil Spill. Alex then transitioned to the University of Southern Mississippi where he earned his MS degree in Coastal Sciences in 2016 from his work on invasive lionfish life history in the northern Gulf of Mexico.  For the past 2.5 years, Alex has been the project manager for the Natural Resource Damage Assessment Artificial Reef Creation and Restoration Project with the Florida Fish and Wildlife Conservation Commission’s Artificial Reef Program.  This project was the largest artificial reef project in the history of Florida’s artificial reef program and upon completion will have deployed more than 3,000 new artificial reefs across northwest Florida.  Currently Alex is involved in numerous projects from sea turtle lighting initiatives to beach restoration and lionfish mitigation projects.  </p>
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div style={carouselGeneral}>
          <div style={carPic}>
          </div>
          <div style={a}>
            <div style={b}>
            </div>
            <br/>
            <h3 style={carName}> Alex Fogg </h3>
            <br/>
            <h4 style={carTitle}> Marine Resources Coordinator </h4>
            <br/>
            <div style={scrollArea}>
              <div tabIndex='1' style={scrollAreaInner}>
                <p style={carPara}> Alex Fogg is the Marine Resource Coordinator for Okaloosa County, Florida.  His background in invasive lionfish stems from the implementation of a Gulf of Mexico wide life history study which required broad collaboration with Federal, State and local governments as well as local businesses and stakeholders throughout the Gulf of Mexico.  Alex received his BS degree from the University of South Carolina in 2011 and began his work career with NOAA in Pascagoula, Mississippi working on numerous Gulf of Mexico fisheries surveys following the Deepwater Horizon Oil Spill. Alex then transitioned to the University of Southern Mississippi where he earned his MS degree in Coastal Sciences in 2016 from his work on invasive lionfish life history in the northern Gulf of Mexico.  For the past 2.5 years, Alex has been the project manager for the Natural Resource Damage Assessment Artificial Reef Creation and Restoration Project with the Florida Fish and Wildlife Conservation Commission’s Artificial Reef Program.  This project was the largest artificial reef project in the history of Florida’s artificial reef program and upon completion will have deployed more than 3,000 new artificial reefs across northwest Florida.  Currently Alex is involved in numerous projects from sea turtle lighting initiatives to beach restoration and lionfish mitigation projects.  </p>
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div style={carouselGeneral}>
          <div style={carPic}>
          </div>
          <div style={a}>
            <div style={b}>
            </div>
            <br/>
            <h3 style={carName}> Alex Fogg </h3>
            <br/>
            <h4 style={carTitle}> Marine Resources Coordinator </h4>
            <br/>
            <div style={scrollArea}>
              <div tabIndex='1' style={scrollAreaInner}>
                <p style={carPara}> Alex Fogg is the Marine Resource Coordinator for Okaloosa County, Florida.  His background in invasive lionfish stems from the implementation of a Gulf of Mexico wide life history study which required broad collaboration with Federal, State and local governments as well as local businesses and stakeholders throughout the Gulf of Mexico.  Alex received his BS degree from the University of South Carolina in 2011 and began his work career with NOAA in Pascagoula, Mississippi working on numerous Gulf of Mexico fisheries surveys following the Deepwater Horizon Oil Spill. Alex then transitioned to the University of Southern Mississippi where he earned his MS degree in Coastal Sciences in 2016 from his work on invasive lionfish life history in the northern Gulf of Mexico.  For the past 2.5 years, Alex has been the project manager for the Natural Resource Damage Assessment Artificial Reef Creation and Restoration Project with the Florida Fish and Wildlife Conservation Commission’s Artificial Reef Program.  This project was the largest artificial reef project in the history of Florida’s artificial reef program and upon completion will have deployed more than 3,000 new artificial reefs across northwest Florida.  Currently Alex is involved in numerous projects from sea turtle lighting initiatives to beach restoration and lionfish mitigation projects.  </p>
              </div>
            </div>
          </div>
        </div>
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
