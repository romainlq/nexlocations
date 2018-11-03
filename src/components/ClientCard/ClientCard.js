import React, { Component } from 'react'
import { Card } from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core/Typography'

export default class ClientCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography>
            TEST CLIENT
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
