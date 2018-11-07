import React, { Component } from 'react';
import Search from './Search/Search';
import Result from './Result/Result';
// import Map from './Map/Map'; // For now, we don't have the company address from backend
import { Grid } from '@material-ui/core';
import LoginContainer from '../containers/LoginContainer';

const Body = ({ isLoggedIn }) => (
  <Grid container direction="column" justify="center" alignItems="stretch">
    {isLoggedIn ? (
      <>
        <Search />
        <Result />
      </>
    ) : (
      <LoginContainer />
    )}
  </Grid>
);

export default Body;
