import { connect } from 'react-redux'
import Body from '../components/Body';

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps)(Body);