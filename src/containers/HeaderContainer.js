import { connect } from 'react-redux';
import Header from '../components/Header'

import { userActions } from '../actions';
const { logoutAction } = userActions;

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);