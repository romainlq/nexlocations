import { connect } from 'react-redux'
import Body from '../components/Body';

const mapStateToProps = state => {
    console.log("bodycontainer state", state)
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    }
}

export default connect(mapStateToProps)(Body);