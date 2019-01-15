import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Map from '../components/Map/Map';

export default class MapPage extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Map />
      </div>
    );
  }
}
