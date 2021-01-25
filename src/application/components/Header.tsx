import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';

class Header extends Component {
  constructor( {props, title} ) {
    super(props);
    this.title = title;
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <p style={{padding:15 + 'px'}}>{this.title}</p>
        </AppBar>
      </div>
    )
  }
}

export default Header;

