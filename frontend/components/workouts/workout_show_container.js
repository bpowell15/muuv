import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchWorkout, deleteWorkout } from '../../actions/workout_actions';
import WorkoutShow from './workout_show';

const mapStateToProps = (state, ownProps) =>{

  return ({
    workout: state.workout[ownProps.match.params.workoutId] || {},
    user: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {

  return ({
    fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId))
  });
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(WorkoutShow));
