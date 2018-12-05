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

const PinInfo = ({ info: { clientName, projects }, classes }) => {
  const _renderConsultants = consultants =>
    consultants.map(consultant => (
      <ListItem key={consultant.id}>
        <Typography variant="body2" classes={classes.consultant}>
          {consultant.name}
        </Typography>
      </ListItem>
    ));

  const _renderProjects = projects =>
    projects.map(project => (
      <List>
        <ListItem>
          <Typography variant="subtitle2" color="primary.dark">
            {project.projectName}
          </Typography>
        </ListItem>
        {project.consultants && _renderConsultants(project.consultants)}
      </List>
    ));

  return (
    <React.Fragment>
      <Typography variant="overline">{clientName}</Typography>
      {projects && _renderProjects(projects)}
    </React.Fragment>
  );
};

PinInfo.propTypes = {
  info: PropTypes.shape({
    clientName: PropTypes.string,
    projects: PropTypes.shape({
      id: PropTypes.number,
      projectName: PropTypes.string.isRequired,
      consultants: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      }).isRequired
    })
  })
};

export default withStyles(styles)(PinInfo);
