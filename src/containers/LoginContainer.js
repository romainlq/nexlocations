import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from '../components/Login/Login';
import { userActions } from '../actions';

const { authenticateUserAction } = userActions;

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.error
  };
};

const mapDispatchToProps = dispatch => ({
  login: ({ username, password }, cb) => {
    dispatch(authenticateUserAction({ username, password }, cb));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
