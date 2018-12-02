import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import MDSpinner from 'react-md-spinner';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  spinner: {
    marginTop: theme.spacing.unit * 3
  }
});
class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  _handleButtonClick(event) {
    event.preventDefault();
    const { login } = this.props;
    const { username, password } = this.state;
    login({ username, password });
  }

  render() {
    const { classes, loading, error } = this.props;
    return (
      <div className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>

          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={e => this._handleButtonClick(e)}
          >
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Nom utilisateur</InputLabel>
              <Input
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
                value={this.state.username}
                onChange={this.handleChange('username')}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Mot de passe</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange('password')}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Se connecter
            </Button>
          </form>

          {loading && (
            <MDSpinner
              size={50}
              singleColor="#63a39e"
              className={classes.spinner}
            />
          )}
          {error && (
            <Typography variant="overline" color="error">
              Erreur : Mauvais identifiants
            </Typography>
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
