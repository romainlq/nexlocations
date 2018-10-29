import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';

const styles= {
    container: {
        backgroundColor:"#1abc9c",
    }
}
class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Grid >
          <p>Vous cherchez : </p>
          <input type="checkbox" /> Un consultant
          <input type="checkbox" /> Un client
          <Input
            defaultValue="Hello world"
            inputProps={{
              'aria-label': 'Description'
            }}
          />
        </Grid>
      </div>
    );
  }
}

export default Search;
