
import {connect} from 'react-redux';
import SignUp from '../components/sign-up/SignUp';
import {addUser} from '../service/actions/action';

const mapStateToProps=state=>({

})

const mapDispatchToProps=dispatch=>({
    addUserHandler:data=>dispatch(addUser(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)