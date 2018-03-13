import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import bagIcon from'../assets/bag.png';

class Header extends Component {

  render() {
    return (
      <div style={{
        textAlign:'center',
        fontFamily: 'SANS-SERIF',
        borderBottomStyle: 'solid'
      }}>
        <Link to="/cart">
          <img src={bagIcon} style={{
            width: '25px',
            position: 'fixed',
            right: '20px',
            top: '20px'
          }}/>
        </Link>
        <p style={{
          fontFamily: 'SANS-SERIF',
          color: '#4caf4f',
          fontWeight: '100',
          fontSize: '50px',
          margin: '0px'
        }}>mend</p>
        <div style={{textAlign:'left'}}>
          <Link to="/" style={menuItemStyle}>Home</Link>
      		<Link to="/about" style={menuItemStyle}>About</Link>
        </div>
      </div>
    );
  }

}

const menuItemStyle={
  'margin': '10px',
  'textDecoration': 'none',
  'color': 'black',
}

export default Header;
