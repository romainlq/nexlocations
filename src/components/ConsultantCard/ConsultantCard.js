import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class ConsultantCard extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6">DOE John</Typography>
          <Typography variant="caption">john.doe@company.com</Typography>
          <Typography variant="body1">Actuellement en mission chez :</Typography>
          <List component="nav">
            <ListItem>
              <ListItemText primary="Client 1" secondary="depuis le 12 Mars"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Client 2" secondary="le 15 Décembre"/>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ConsultantCard);
