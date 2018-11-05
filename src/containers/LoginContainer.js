import { connect } from 'react-redux'
import Login from '../components/Login/Login';
import { loginAction }from '../actions/loginAction'


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(loginAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)