import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Map from './map';
import { createRoute }  from '../../actions/route_actions';

const mapStateToProps = (state) => {

  return {
    // errors: state.errors.routes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRoute: (route) => dispatch(createRoute(route))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Map));
