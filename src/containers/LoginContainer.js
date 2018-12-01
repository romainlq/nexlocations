import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { userActions } from '../actions';

const { authenticateUserAction } = userActions;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: ({ username, password }) =>
    dispatch(authenticateUserAction({ username, password }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
