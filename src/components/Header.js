import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  _handleButtonClick() {
    const { isLoggedIn, login, logout } = this.props;
    !isLoggedIn ? login() : logout();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            NexLocations
          </Typography>
          <Typography variant="h6" color="inherit">
            {isLoggedIn ? 'CONNECTE' : 'PAS CO'}
          </Typography>
          <Button onClick={this._handleButtonClick} variant="outlined" color="secondary">
            {isLoggedIn ? 'Deconnexion' : 'Se connecter'}
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
