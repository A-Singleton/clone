import React, {Component} from 'react';


class Footer extends Component {
  render() {

const footer = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: 'rgb(28, 51, 92)',
}

  return(
  <footer style={footer} className="footer">
    <div className="container">
      <span className="text-muted">AMRC</span>
    </div>
  </footer>
   );
  }
}

export default Footer;
