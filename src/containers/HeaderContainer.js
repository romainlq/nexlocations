import { connect } from 'react-redux';
import Header from '../components/Header'

import { loginAction, logoutAction }from '../actions/loginAction'

const mapStateToProps = state => {
  console.log('reducerState', state)
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginAction()),
  logout: () => dispatch(logoutAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);