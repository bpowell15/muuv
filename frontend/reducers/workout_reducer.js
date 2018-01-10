import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT, REMOVE_WORKOUT }
  from '../actions/workout_actions';
import merge from 'lodash/merge';


const workoutReducer = (state = {}, action ) => {
  let newState;
  switch (action.type) {
    case RECEIVE_WORKOUTS:
      return action.workouts;
    case RECEIVE_WORKOUT:
      newState = merge({}, state, {[action.workout.id]: action.workout});
      return newState;
    case REMOVE_WORKOUT:
    
      newState = merge({}, state);
      delete newState[action.workoutID];
      return newState;
    default:
      return state;
  }
};

export default workoutReducer;
