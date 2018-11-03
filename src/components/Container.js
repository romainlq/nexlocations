import React, { Component } from 'react'
import Search from './Search/Search';
import Result from './Result/Result';
// import Map from './Map/Map'; // For now, we don't have the company address from backend
import { Grid } from '@material-ui/core';


class Container extends Component {
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="stretch">
          <Search />
          <Result />
          {/* <Map /> */}
      </Grid>
    )
  }
}

export default Container