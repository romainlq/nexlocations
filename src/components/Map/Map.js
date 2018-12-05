import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Pin from '../Pin/Pin';
import PinInfo from '../PinInfo/PinInfo';

const TOKEN =
  'pk.eyJ1Ijoicm9tYWlud24iLCJhIjoiY2pubXNmNWhyMG9udjNxbXFmeHI5eHQyciJ9.KIbKD-d1G7dzmhD1c1h-uw';

const PROJECTS = [
  {
    clientName: 'Carrefour',
    latitude: 48.88793,
    longitude: 2.263463,
    projects: [
      {
        id: 1,
        projectName: 'Project 1',
        consultants: [
          {
            id: 1,
            name: 'John Doe'
          },
          {
            id: 2,
            name: 'Martin dupont'
          },
          {
            id: 3,
            name: 'Pif paf pouf'
          }
        ]
      },
      {
        id: 2,
        projectName: 'Project 2',
        consultants: [
          {
            id: 1,
            name: 'Batman'
          },
          {
            id: 2,
            name: 'Spiderman'
          },
          {
            id: 3,
            name: 'Elon Musk'
          }
        ]
      }
    ]
  },
  { clientName: 'Renault', latitude: 48.833269, longitude: 2.238756 },
  { clientName: 'PSA', latitude: 48.802525, longitude: 2.338276 },
  { clientName: 'Bouygues', latitude: 48.858574, longitude: 2.436423 }
];

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
      popupInfo: null
    };
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
        longitude={project.longitude}
        latitude={project.latitude}
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
    const { viewport } = this.state;
    return (
      <div>
        <ReactMapGL
          {...viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={TOKEN}
        >
          {PROJECTS.map(this._renderCityMarker)}
          {this._renderPopup()}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
