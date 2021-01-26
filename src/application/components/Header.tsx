import React, { FC } from 'react';
import { AppBar } from '@material-ui/core';

const Header: FC<{ title:string} > = ({title}) => {
  return (
    <div>
      <AppBar position="static">
        <p style={{padding:15 + 'px'}}>{title}</p>
      </AppBar>
    </div>
  )
}

export default Header;

