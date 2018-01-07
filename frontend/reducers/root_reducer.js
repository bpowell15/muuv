import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import workout from './workout_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  workout
});

export default rootReducer;
