import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HeaderContainer from './containers/HeaderContainer';
import BodyContainer from './containers/BodyContainer';

const theme = createMuiTheme();
class App extends Component {

  componentDidMount() {
    document.title = 'NexLocations'
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HeaderContainer />
        <BodyContainer />
      </MuiThemeProvider>
    );
  }
}

export default App; 