import * as React from 'react';
import { AppBar, Typography, Toolbar } from 'material-ui';
import { AccountCircle } from '@material-ui/icons';
import './header.pcss';

const Header: React.SFC<{}> = () => (
  <AppBar position={"static"}>
    <Toolbar>
    <Typography  variant={"title"} color={"inherit"}>
        Developers Q&A
      </Typography>
      <span className="space" />
      <AccountCircle />
    </Toolbar>
  </AppBar>
);


export default Header;