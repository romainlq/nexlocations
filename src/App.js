import React, { Component } from 'react';

import Container from './components/Container'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HeaderContainer from './containers/HeaderContainer';

const theme = createMuiTheme();
class App extends Component {

  componentDidMount() {
    document.title = 'NexLocations'
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HeaderContainer />
        <Container />
      </MuiThemeProvider>
    );
  }
}

export default App; 