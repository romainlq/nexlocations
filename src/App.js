import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MapPage from './pages/MapPage';
import PageNotFound from './pages/PageNotFound';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#82b5b1',
      main: '#63a39e',
      dark: '#45726e',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#df6354',
      main: '#d73c2a',
      dark: '#962a1d'
    }
  },
  typography: {
    useNextVariants: true
  }
});

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
class App extends Component {
  componentDidMount() {
    document.title = 'NexLocations';
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              path="/"
              exact
              component={HomePage}
            />
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              path="/map"
              component={MapPage}
            />
            <Route status={404} path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
