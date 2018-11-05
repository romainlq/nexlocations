import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import ConsultantCard from '../ConsultantCard/ConsultantCard';
import axios from 'axios';


const URL = 'http://localhost:3004';
export default class Result extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    consultant: null
  };

  componentDidMount = () => {
    axios
      .get(`${URL}/consultants/1`)
      .then(response => this.setState(() => ({ consultant: response.data, isLoading: false })));
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
