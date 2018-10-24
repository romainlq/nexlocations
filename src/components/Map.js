import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'

const TOKEN = ""


class Map extends Component {
    state = {
        viewport: {
          width: 800,
          height: 400,
          latitude: 48.866667,
          longitude: 2.333333,
          zoom: 8
        }
      };

  render() {
    return (
      <div>
        <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={TOKEN}
      />
      </div>
    )
  }
}

export default Map
