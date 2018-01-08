
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createWorkout, clearErrors } from '../../actions/workout_actions';

import WorkoutForm from './workout_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.workout
  };
};

const mapDispatchToProps = (dispatch, { workout }) => {

  return {
    processForm: workout => dispatch(createWorkout(workout)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutForm));
