
import { connect } from 'react-redux';

import { createWorkout, clearErrors } from '../../actions/workout_actions';

import WorkoutForm from './workout_form';

const mapStateToProps = (state) => {
  return {
    distance: (state.workout.distance),
    durationHours: (state.workout.durationHours),
    durationMinutes: (state.workout.durationMinutes),
    durationSeconds: (state.workout.durationSeconds),
    elevation: (state.workout.elevation),
    sport: (state.workout.sport),
    date: (state.workout),
    time: (state.workout.time),
    title: (state.workout.distance),
    description: (state.workout.description)
  };
};

const mapDispatchToProps = (dispatch, { workout }) => {
  return {
    processForm: workout => dispatch(createWorkout(workout)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);
