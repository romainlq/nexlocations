import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const PinInfo = ({ info: { clientName, projects } }) => {
  const _renderConsultants = (consultants) =>
    consultants.map(consultant => (
      <ListItem key={consultant.id}>{consultant.name}</ListItem>
    ));

  const _renderProjects = (projects) => (
    projects.map(project => (
    <List>
      <ListItem>{project.projectName}</ListItem>
      {project.consultants && _renderConsultants(project.consultants)}
    </List>
      ))
  );

  return (
    <React.Fragment>
      <p>{clientName} </p>
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

export default PinInfo;
