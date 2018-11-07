import { connect } from 'react-redux'
import Body from '../components/Body';

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        consultant: state.consultants[0]
    }
}

export default connect(mapStateToProps)(Body);