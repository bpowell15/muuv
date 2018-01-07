import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import workout from './workout_errors_reducer';

export default combineReducers({
  session,
  workout
});
