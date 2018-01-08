import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { fetchWorkouts, deleteWorkout } from '../../actions/workout_actions';

const mapStateToProps = (state) => {
  return {
    workouts: Object.keys(state.workout).map(id => state.workout[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    deleteWorkout: (id) => dispatch(deleteWorkout(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
