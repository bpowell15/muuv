import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import BackgroundImage from './background_image';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});


export default connect(mapStateToProps,null)(BackgroundImage);
