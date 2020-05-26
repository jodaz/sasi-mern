import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <AppBar>
    <Toolbar>
      <Typography variant="h5">SASI</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;