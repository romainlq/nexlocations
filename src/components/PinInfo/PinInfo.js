import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  consultant: {
    color: theme.palette.secondary.dark
  }
});

const PinInfo = ({ info: { clientName, projectList }, classes }) => {
  const _renderConsultants = collaboratorList =>
    collaboratorList.map(consultant => (
      <ListItem key={consultant.id}>
        <Typography variant="body2" classes={classes.consultant}>
          {consultant.name}
        </Typography>
      </ListItem>
    ));

  const _renderProjects = projectList =>
    projectList.map(project => (
      <List>
        <ListItem>
          <Typography variant="subtitle2" color="primary.dark">
            {project.name}
          </Typography>
        </ListItem>
        {project.collaboratorList &&
          _renderConsultants(project.collaboratorList)}
      </List>
    ));

  return (
    <React.Fragment>
      <Typography variant="overline">{clientName}</Typography>
      {projectList && _renderProjects(projectList)}
    </React.Fragment>
  );
};

PinInfo.propTypes = {
  info: PropTypes.shape({
    clientName: PropTypes.string,
    projectList: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      collaboratorList: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      }).isRequired
    })
  })
};

export default withStyles(styles)(PinInfo);
