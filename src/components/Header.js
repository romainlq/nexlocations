import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded';
import CustomLink from './CustomLink';

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  grow: {
    flexGrow: 1,
    marginRight: 20
  },
  infos: {
    display: 'flex',
    alignItems: 'center'
  },
  groupRight: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Header = ({ user, classes }) => {
  const _handleLogOutButtonClick = e => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div>
            <CustomLink to="/">
              <Typography className={classes.grow} variant="h6" color="inherit">
                NexLocations
              </Typography>
            </CustomLink>
            {user.isLoggedIn && (
              <>
                <CustomLink to="/map">Map</CustomLink>
                <CustomLink to="/search">Search</CustomLink>
                <CustomLink to="/food">Food</CustomLink>
              </>
            )}
          </div>

          <div className={classes.groupRight}>
            {user.isLoggedIn && (
              <div className={classes.infos}>
                <Typography
                  className={classes.grow}
                  variant="overline"
                  color="inherit"
                >
                  {user.name}
                </Typography>
                <Button
                  color="inherit"
                  onClick={e => _handleLogOutButtonClick(e)}
                >
                  <ExitToAppRounded />
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
