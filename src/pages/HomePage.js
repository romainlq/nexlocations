import React from 'react';
import { withRouter } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer';
import CustomLink from '../components/CustomLink';

const HomePage = () => {
  return (
    <div>
      <HeaderContainer />
      <h1> This is the home page</h1>
      <CustomLink to="/map">Map</CustomLink>
      <CustomLink to="/search">Search</CustomLink>
      <CustomLink to="/food">Food</CustomLink>
    </div>
  );
};

export default withRouter(HomePage);
