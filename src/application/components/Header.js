import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <p>This is Header.</p>
        </AppBar>
      </div>
    )
  }
}

export default Header;

