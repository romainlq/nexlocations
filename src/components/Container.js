import React, { Component } from 'react'
import Search from './Search';
import Map from './Map';
import { Grid } from '@material-ui/core';


class Container extends Component {
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="stretch">
          <Search />
          <Map />
      </Grid>
    )
  }
}

export default Container