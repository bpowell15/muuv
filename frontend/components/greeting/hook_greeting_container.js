import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/session_actions';
import HookGreeting from './hook_greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HookGreeting));
