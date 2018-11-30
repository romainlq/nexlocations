import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, TextField, Button, InputLabel, FormControl } from '@material-ui/core';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      username:''
    }
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  _handleButtonClick() {
    const { login } = this.props;
    const { username, password } = this.state;
    login({username, password});
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography>Connexion</Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Nom utilisateur"
              value={this.state.username}
              onChange={this.handleChange('username')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Mot de passe"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange('password')}
            />
            <Button onClick={this._handleButtonClick} variant="outlined" color="primary" >
              Se connecter
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default Login;
