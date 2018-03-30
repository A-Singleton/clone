import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import BottomNav from './BottomNav.jsx';
import Fade from 'react-reveal/Fade';
import Background from '../images/lionfish_1.jpg';
import '../App.css';

class Home extends Component  {
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

    const working = {
      backgroundColor: 'rgb(0, 0, 0)',
      flex: '1 1 0%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '100vw',
    }

    const commitment = {
      backgroundColor: 'rgb(20, 148, 201)',
      flex: '0 1 0%',
      height: '140px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingLeft: '15vw',
      paddingRight: '15vw',
      }

      const handshake = {
        flex: '1 1 0%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100vw',
        padding: '8vh 15vw',
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

    const commitPara = {
      wordBreak: 'keep-all',
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '14px',
      marginTop: '30px',
      fontWeight: '500',
    }

    const handPara = {
      wordBreak: 'keep-all',
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: '14px',
      marginTop: '30px',
      fontWeight: '500',
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

    const centParas = {
      paddingLeft: '20vw',
      paddingRight: '20vw',
    }

    const workText = {
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '9vh',
    paddingBottom: '0px',
    paddingLeft: '10vw',
    width: '90vw',
}

    const workParas = {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '14px',
    marginTop: '30px',
    textAlign: 'start'
    }

    const workFish = {
      flex: '1 1 0%',
      width: '55vw',
      marginTop: '2vh',
      marginBottom: '40px',
    }

    const gridParas = {
    flexDirection: 'column',
    flex: '1 1 0%',
    display: 'flex',
    padding: '3vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
    }

    const handImage = {

    }

    const handTitle = {
      
    }

    return (
      <div>
        <NavBar />
        <Fade bottom duration={700}>
        <div className="jumbotron" style={jumbo}>
          <div className="still" style={still}>
            <div className="Moving-back" style={image}>
            </div>
            <div style={inner}>
              <div className="inner" style={reveal}>
                <div >
                  <p style={headline}>INNOVATIONS FOR HEALTHY OCEANS</p>
                    <div style={underscore}></div>
                </div>
              </div>
              <div style={bottomButton}>
              <a className="pulse" href="#problem" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
              </div>
            </div>
          </div>
        </div>
        </Fade>
        <div id="problem" className="problem" style={problem}>
          <div style={underscore}>
          </div>
          <br/>
          <h1 style={subtitle}> THE LIONFISH PROBLEM </h1>
          <div style={centParas}>
          <Fade bottom>
          <p style={paras}> The invasion of lionfish risks devastating marine life and coral
           ecosystems in the Atlantic and was named one of the top 15 threats
           to global diversity. They are decimating local reefs and consuming
           native species of fish: leading studies show lionfish invasion is
            responsible for reducing native species recruitment on occupied
             sites by nearly 80% and reducing overall native species biomass
              by over 60%. </p>

              <p style={paras}> Alarmingly, the only form of lionfish control
              that exists today is hunting in shallow water by human divers,
              but it is too limited by logistical and economic constraints to
              realistically offer a lasting solution to this problem. </p>

                  <p style={paras}> The lionfish invasion is a particularly
                  concerning threat to Western Florida, as marine resources are
                  critical to the region’s economic health: according to the
                  NOAA, recreational fishing generated ~70,109 jobs and $7.5
                  billion in sales impacts in West Florida in 2014 alone. </p>
          </Fade>
          </div>
          <div style={bottomButton}>
          <a className="pulse" href="#working" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
          </div>
        </div>
        <div id="working" className="working" style={working}>
          <div style={underscore}></div>
          <br/>
          <Fade left>
          <h1 style={subtitle}> Working Smarter </h1>
          <p style={paras}> AMRC was founded out of the conviction that marine
          data and artificial intelligence could offer promising insights for
          controlling invasive species in an economically sustainable way. </p>
          <p style={paras}> Our mission is to data-driven methods for lionfish
          control, using sophistiacted technologies from a wide range of domains
           to advance invasive species control research. </p>
           <p style={paras}> It was borne out of the observation that the
           fishing community suffers from insufficient coordination and lack of
           trust among peers. Our data and softare driven solutions seek to
           change that. </p>
           </Fade>
          <div style={bottomButton}>
          <a className="pulse" href="#stillGrid" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
          </div>
        </div>
        <div id="stillGrid" className="stillGrid" style={still}>
          <div className="Moving-back" style={image}>
          </div>
          <div style={inner}>
            <div className="inner" style={reveal}>
              <div >
                <p style={paras}>The potential economic impact of lionfish
                threatens the charter boating, commercial fishing, tourism, and
                seafood wholesale industries. Charter fishing along generates
                over $14 billion in economic activity for western Florida.</p>
                <p style={paras}>Assuming that each lionfish consumes an ounce
                of biomass (flounder, red snapper etc.) daily, and each pound of
                 biomass is conservatively worth $3 to the commercial charter
                 boat industry, each lionfish removal could result in $70 of
                 conserved commercially harvestable biomass.</p>
                  <div style={underscore}>
                  </div>
              </div>
            </div>
            <div style={bottomButton}>
            <a className="pulse" href="#commitment" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
            </div>
          </div>
        </div>
        <div id="commitment" className="commitment" style={commitment}>
          <Fade bottom>
          <p style={commitPara}>We are currently focusing our research in Escambia
           County, Okaloosa County and Santa Rosa County, with the vision of
           tackling lionfish infestations plaguing the entire Gulf Coast
           and beyond. </p>
          </Fade>
        </div>

        <div id="handshake" className="handshake" style={handshake}>
          <Fade left>
          <div style={underscore}></div>
            <br/>
            <p style={handPara}>To ensure the responsible use of our
            technology, for purposes that best protect and preserve the
            long-term health of the natural environment. </p>
            <p style={handPara}>To partner with non-profits and the academic
            community in tackling the major environmental problems plaguing the
            area. </p>
            <p style={handPara}>To remain transparent with our actions and
            accountable to the local community. </p>
          </Fade>
          <Fade right>
          <p style={handPara}>To employ local Floridians and providing them
           with training and experience to develop into highly skilled talent,
            as demonstrated by the fact that half our team consists of proud
            Pensacola locals. </p>
           <p style={handPara}>To invest in high school and university
           students by providing educational opportunities to learn about and
           work in marine biology, data science, and business, as well as
           mentorship to budding entrepreneurs. </p>
            <p style={handPara}>To work with local fishing and charter boat
             communities in improving the quality of fish stocks. </p>
          </Fade>
        </div>

        <BottomNav />
        <Footer />
      </div>
    );
  }
}

export default Home;
