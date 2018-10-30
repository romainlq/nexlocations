import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ConsultantCard extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Card>
        <CardContent>
          TEST

        </CardContent>
      </Card>
    )
  }
}

export default ConsultantCard;