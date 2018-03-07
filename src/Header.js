import React, { Component } from 'react';
import gmShedLogo from './gm-shed.png';
import searchIcon from './ic_search_black_24px.svg';
import { green, red } from './colours';

class Header extends Component {
  render() {

    const container = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomStyle: 'solid',
      borderBottomColor: green,
      borderBottomWidth: '20px',
    };

    const navItem = {
      padding: '56px 0 56px 0',
      margin: '0 15px 0 15px'
    };

    const quickQuote = {
      padding: '10px',
      backgroundColor: red,
      color: 'white',
    };

    const selected = {
      borderBottomStyle: 'solid',
      borderBottomColor: red,
      borderBottomWidth: '6px',
      color: green,
      fontWeight: 'bold',
    };

    return (
      <div style={container}>
        <img src={gmShedLogo}/>
        <div style={navItem}> About</div>
        <div style={navItem}> Shed Range</div>
        <div style={navItem}> Store Locator</div>
        <div style={{...navItem, ...selected}}> Shed Builder</div>
        <div style={{...navItem, ...quickQuote}}> Quick Quote </div>
        <img src={searchIcon}/>
      </div>
    );
  }
}

export default Header;