import { connect } from 'react-redux';
import Header from '../components/Header'

import { loginAction, logoutAction }from '../actions/userAction'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginAction()),
  logout: () => dispatch(logoutAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);