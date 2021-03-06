import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionModal from './session_modal';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionModal));
