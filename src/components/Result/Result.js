import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import ConsultantCard from '../ConsultantCard/ConsultantCard';

export default class Result extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    consultant: null
  };

  componentDidMount = () => {
    
  };

  render() {
    const { consultant } = this.state;
    return <div>
            {consultant ?
              <ConsultantCard consultant={consultant} />
              : <p>Loading ...</p>
            }
          </div>;
  }
}
