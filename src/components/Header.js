import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    NexLocations
                </Typography>
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header;
