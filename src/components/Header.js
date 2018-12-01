import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded';

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
  _handleLogOutButtonClick(e) {
    e.preventDefault();
    const { logout } = this.props;
    logout();
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
                <>
                  <Typography
                    className={classes.grow}
                    variant="overline"
                    color="inherit"
                  >
                    {user.name}
                  </Typography>
                  <Button
                    color="inherit"
                    onClick={e => this._handleLogOutButtonClick(e)}
                  >
                    <ExitToAppRounded />
                  </Button>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
