import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, RadioGroup, FormControl, FormControlLabel, Radio, withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginBottom: '30px',
  },
  formControl: {
    margin: theme.spacing.unit * 3,

  },
  group: {
    display:'flex',
    flexDirection:'row',
    margin: `${theme.spacing.unit}px 0`,
  },
  container: {
    backgroundColor: '#1abc9c',
    marginBottom: '120px',
    color: 'red'
  }
});
class Search extends Component {
  state = {
    value: 'client',
  };

  _handleChange = event => {
    this.setState({ value: event.target.value });
  }; 

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid>
          <Paper>
            <FormControl>          
              <Typography>Vous recherchez : </Typography>
              <RadioGroup
                className={classes.group}
                value={this.state.value}
                onChange={this._handleChange}>
                <FormControlLabel
                  value="client"
                  control={<Radio color="primary" />}
                  label="Client"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="consultant"
                  control={<Radio color="primary" />}
                  label="Consultant"
                  labelPlacement="start"
                />
              </RadioGroup>
              {/* <Input
                defaultValue=""
                inputProps={{
                  'aria-label': 'Description'
                }}
              /> */}
            </FormControl>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Search);
