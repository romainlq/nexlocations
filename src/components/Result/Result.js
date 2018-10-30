import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ConsultantCard from '../ConsultantCard/ConsultantCard';

export default class componentName extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <ConsultantCard />
      </div>
    )
  }
}
