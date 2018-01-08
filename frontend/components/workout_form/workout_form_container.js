
import { connect } from 'react-redux';

import { createWorkout, clearErrors } from '../../actions/workout_actions';

import WorkoutForm from './workout_form';

const mapStateToProps = (state) => {
  return {
  
  };
};

const mapDispatchToProps = (dispatch, { workout }) => {
  return {
    processForm: workout => dispatch(createWorkout(workout)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);
