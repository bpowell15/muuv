import { connect } from 'react-redux';
import RouteIndex from './routes_index';
import { fetchRoutes, deleteRoute } from '../../actions/route_actions';

const mapStateToProps = (state) => {
  
  return {
    routes: Object.keys(state.routes).map(id => state.routes[id]),
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoutes: () => dispatch(fetchRoutes()),
    deleteRoute: (id) => dispatch(deleteRoute(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
