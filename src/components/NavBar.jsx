import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Navbar, Nav} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css'


class NavBar extends Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-expand-md">
              <Link className="navbar-brand" to="/">AMRC</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/who">WHO WE ARE <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/research"> RESEARCH</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sponsors"> SPONSORS </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/contact">CONTACT<span className="sr-only">(current)</span></Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
    );
  }
}

export default NavBar;
