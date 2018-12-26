import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import LoginContainer from 'containers/LoginContainer';

class LoginPage extends Component {
  render() {
    return <LoginContainer />;
  }
}

export default withRouter(LoginContainer);
