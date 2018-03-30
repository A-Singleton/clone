import React, { Component } from 'react';
import {LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip,
	ComposedChart} from 'recharts';
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
      display: 'flex',
      flex: '1 1 0%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: '30px 5vw 70px',
      flexDirection: 'column',
      width: '100vw',
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

    const data = [
      {name: 'Page A', uv: 4000, pv: 9000},
      {name: 'Page B', uv: 3000, pv: 7222},
      {name: 'Page C', uv: 2000, pv: 6222},
      {name: 'Page D', uv: 1223, pv: 5400},
      {name: 'Page E', uv: 1890, pv: 3200},
      {name: 'Page F', uv: 2390, pv: 2500},
      {name: 'Page G', uv: 3490, pv: 1209},]

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
                    <a className="pulse" href="#working" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sponsors" className="sponsors" style={problem}>
                <div style={underscore}>
                </div>
                <br/>

                <div>

                  <ComposedChart width={935} height={308} data={data} syncId="anyId">
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                    <Brush />
                  </ComposedChart>
                    <div style={bottomButton}>
                    <a className="pulse" href="#working" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
                    </div>
                </div>
              </div>
              <div id="sponsors" className="sponsors" style={problem}>
                <div style={underscore}>
                </div>
                <br/>

                <div>
                	<h4>A demo of synchronized AreaCharts</h4>
                  <ComposedChart width={600} height={200} data={data} syncId="anyId"
                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                    <Brush />
                  </ComposedChart>

                </div>

                <div>
                	<h4>A demo of synchronized AreaCharts</h4>
                  <ComposedChart width={600} height={200} data={data} syncId="anyId"
                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                    <Brush />
                  </ComposedChart>

                </div>

                <div>
                	<h4>A demo of synchronized AreaCharts</h4>
                  <ComposedChart width={600} height={200} data={data} syncId="anyId"
                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                    <Brush />
                  </ComposedChart>
                </div>

                <div style={bottomButton}>
                <a className="pulse" href="#working" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
                </div>

                </div>
              <div id="sponsors" className="sponsors" style={problem}>
                <div style={underscore}>
                </div>
                <br/>

                <div>
                  <h4>A demo of synchronized AreaCharts</h4>
                  <ComposedChart width={600} height={200} data={data}
                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
                    <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                    <Brush />
                  </ComposedChart>

                </div>
                <div style={bottomButton}>
                <a className="pulse" href="#working" style={navButtonPlacement}> <img src={Background} style={navButton} alt="button"/> </a>
                </div>
              </div>

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

      <BottomNav />
        <Footer />
      </div>
    );
  }
}

export default Research;
