import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateWorkout, clearErrors } from '../../actions/workout_actions';

import WorkoutEdit from './workout_edit_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.workout
  };
};

const mapDispatchToProps = (dispatch, { workout }) => {

  return {
    processForm: workout => dispatch(updateWorkout(workout)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutEdit));
