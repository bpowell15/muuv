
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createWorkout, clearErrors } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/route_actions';


import WorkoutForm from './workout_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.workout,
    routes: state.routes
  };
};

const mapDispatchToProps = (dispatch, { workout }) => {
  return {
    processForm: workout => dispatch(createWorkout(workout)),
    clearErrors: () => dispatch(clearErrors()),
    fetchRoutes: () => dispatch(fetchRoutes())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutForm));
