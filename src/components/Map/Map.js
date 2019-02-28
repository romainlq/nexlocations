import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Pin from '../Pin/Pin';
import PinInfo from '../PinInfo/PinInfo';

import axios from 'axios';

const TOKEN =
  'pk.eyJ1Ijoicm9tYWlud24iLCJhIjoiY2pubXNmNWhyMG9udjNxbXFmeHI5eHQyciJ9.KIbKD-d1G7dzmhD1c1h-uw';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: 300,
        height: 200,
        latitude: 48.866667,
        longitude: 2.333333,
        zoom: 10
      },
      popupInfo: null,
      projects: []
    };
  }

  componentWillMount() {
    axios.get('km/services/assignments/complete').then(result => {
      console.log(result);
      this.setState(() => ({
        projects: result.data
      }));
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth - 15,
        height: this.props.height || window.innerHeight - 100
      }
    });
  };

  _renderCityMarker = (project, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={parseInt(project.longitude)}
        latitude={parseInt(project.latitude)}
      >
        <Pin size={20} onClick={() => this.setState({ popupInfo: project })} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <PinInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport, projects } = this.state;
    return (
      <div>
        <ReactMapGL
          {...viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={TOKEN}
        >
          {projects.map(this._renderCityMarker)}
          {this._renderPopup()}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
