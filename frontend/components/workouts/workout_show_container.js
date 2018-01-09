import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { fetchWorkout, deleteWorkout } from '../../actions/workout_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkout: () => dispatch(fetchWorkout()),
    deleteWorkout: (id) => dispatch(deleteWorkout(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
