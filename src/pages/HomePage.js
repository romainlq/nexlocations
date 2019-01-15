import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer';
import CustomLink from '../components/CustomLink';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <h1> This is the home page</h1>
        <CustomLink to="/map">Map</CustomLink>
      </div>
    );
  }
}

export default withRouter(HomePage);
