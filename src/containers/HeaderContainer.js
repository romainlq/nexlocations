import { connect } from 'react-redux';
import Header from '../components/Header'

import { logoutAction, authenticateUserAction }from '../actions/userAction'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(authenticateUserAction()),
  logout: () => dispatch(logoutAction()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);