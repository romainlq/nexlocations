import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, TextField, Button, InputLabel, FormControl } from '@material-ui/core';

class Login extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  constructor(props) {
    super(props);
    this.state = {
      name:''
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
    login();
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
              value={this.state.name}
              onChange={this.handleChange('name')}
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
