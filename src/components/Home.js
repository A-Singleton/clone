import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import BottomNav from './BottomNav.jsx';
import Fade from 'react-reveal/Fade';

class Home extends Component  {
  render(){
    return (
      <div>
        <NavBar />
        <div className="container">
          <Fade bottom>
            <h2> INNOVATIONS FOR HEALTHY OCEANS </h2>
          </Fade>
        </div>
        <div className="container">
          <Fade bottom>
            <p> The invasion of lionfish risks devastating marine life and coral
             ecosystems in the Atlantic and was named one of the top 15 threats
             to global diversity. They are decimating local reefs and consuming
             native species of fish: leading studies show lionfish invasion is
              responsible for reducing native species recruitment on occupied
               sites by nearly 80% and reducing overall native species biomass
                by over 60%. </p>
          </Fade>
        </div>
        <Footer />
        <BottomNav />
      </div>
    );
  }
}

export default Home;
