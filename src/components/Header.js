import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    marginRight: 20
  },
  groupRight: {
    display: 'flex',
    alignItems: 'center'
  }
};
class Header extends Component {
  constructor(props) {
    super(props);
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  _handleButtonClick() {
    const { user, login, logout } = this.props;
    !user.isLoggedIn ? login() : logout();
  }

  render() {
    const { user, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography className={classes.grow} variant="h6" color="inherit">
              NexLocations
            </Typography>

            <div className={classes.groupRight}>
              {user.isLoggedIn && (
                <Typography
                  className={classes.grow}
                  variant="overline"
                  color="inherit"
                >
                  {user.firstname} {user.lastname}
                </Typography>
              )}
              <Button
                onClick={this._handleButtonClick}
                variant="outlined"
                color="secondary"
              >
                {user.isLoggedIn ? 'Deconnexion' : 'Se connecter'}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
