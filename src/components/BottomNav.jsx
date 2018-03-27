import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class BottomNav extends Component {
  render() {

const bottomNav = {
    bottom: '60px',
    width: '100%',
    height: '300px',
    lineHeight: '60px',
    backgroundColor: '#f5f5f5',
    flexDirection: 'flex-left'
}

const linkStyle = {
  padding: '-0px',
}

  return(
  <div style={bottomNav} className="footer">
    <Grid>
      <Row className="show-grid">
        <Col sm={2} md={2}>
          <h2> About </h2>
          <Link className="nav-link" to="/" style={linkStyle}> The Lionfish Problem </Link>
          <Link className="nav-link" to="/" style={linkStyle}> News </Link>
          <Link className="nav-link" to="/sponsors" style={linkStyle}> Sponsors and Endorsments </Link>
        </Col>
        <Col sm={2} md={2}>
          <h2> Resources </h2>
          <Link className="nav-link" to="/research" style={linkStyle}> Ecology </Link>
          <Link className="nav-link" to="/research" style={linkStyle}> Technology </Link>
        </Col>
        <Col sm={2} md={2}>
          <h2> Get Involved </h2>
          <Link className="nav-link" to="/sponsors" style={linkStyle}> Sponsor </Link>
          <Link className="nav-link" to="/contact" style={linkStyle}> Careers </Link>
          <Link className="nav-link" to="/contact" style={linkStyle}> Contact </Link>
        </Col>
      </Row>
    </Grid>
  </div>

   );
  }
}

export default BottomNav;
