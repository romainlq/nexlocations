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
    backgroundColor: theme.palette.background.paper
  }
});

class ConsultantCard extends Component {
  static propTypes = {
    consultant: PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      mail: PropTypes.string,
      missions: PropTypes.array
    })
  };

  _renderList(missions) {
    return missions.map(mission => (
      <ListItem key={mission.id}>
        <ListItemText
          primary={mission.clientName}
          secondary={`depuis le ${mission.startDate} et jusqu'au ${mission.endDate}`}
        />
      </ListItem>
    ));
  }

  render() {
    const { classes, consultant } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6">
            {consultant.firstname} {consultant.lastname}
          </Typography>
          <Typography variant="caption">{consultant.mail}</Typography>
          {consultant.missions ? (
            <React.Fragment>
              <Typography variant="body1">{`Actuellement en mission chez :`}</Typography>
              <List component="nav">{this._renderList(consultant.missions)}</List>
            </React.Fragment>
          ) : (
            <Typography>{`N'est pas en mission pour le moment`}</Typography>
          )}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ConsultantCard);
