import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { fetchWorkouts, deleteWorkout } from '../../actions/workout_actions';
import { fetchRoute } from '../../actions/route_actions';

const mapStateToProps = (state) => {
  return {
    workouts: Object.keys(state.workout).map(id => state.workout[id]),
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    deleteWorkout: (id) => dispatch(deleteWorkout(id)),
    fetchRoute: (id) => dispatch(fetchRoute(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
