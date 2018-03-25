import React, {Component} from 'react';


class BottomNav extends Component {
  render() {

const bottomNav = {
    position: 'absolute',
    bottom: '60px',
    width: '100%',
    height: '600px',
    lineHeight: '60px',
    backgroundColor: '#f5f5f5',
}

  return(
  <div style={bottomNav} className="footer">
    <div className="container">
      <span className="text-muted">AMRC</span>
    </div>
  </div>
   );
  }
}

export default BottomNav;
