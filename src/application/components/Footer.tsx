import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';

class Footer extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <p style={{padding:10 + 'px', fontSize: 9 + 'px'}}>
            Copyright (C)2021-2021 maru34.com All Rights Reserved.
          </p>
        </AppBar>
      </div>
    )
  }
}

export default Footer;


