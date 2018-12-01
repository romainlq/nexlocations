import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HeaderContainer from './containers/HeaderContainer';
import BodyContainer from './containers/BodyContainer';

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
      dark: '#962a1d',
    },
  },
  typography: {
    useNextVariants: true,
  },
});
class App extends Component {

  componentDidMount() {
    document.title = 'NexLocations'
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <HeaderContainer />
        <BodyContainer />
      </MuiThemeProvider>
    );
  }
}

export default App; 