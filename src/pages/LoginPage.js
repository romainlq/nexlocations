import React, { Component } from 'react';
import LoginContainer from '../containers/LoginContainer';
import HeaderContainer from '../containers/HeaderContainer';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <LoginContainer />
      </div>
    );
  }
}
