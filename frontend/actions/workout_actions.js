import * as WorkoutAPIUtil from '../api_util/workout_util';
export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';
export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveWorkouts = (workouts) => {
  return {
    type: RECEIVE_WORKOUTS,
    workouts
  };
};

export const receiveWorkout = (workout) => {

  return {
    type: RECEIVE_WORKOUT,
    workout
  };
};

export const removeWorkout = (workoutID) => {
  return {
    type: REMOVE_WORKOUT,
    workoutID
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_WORKOUT_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const fetchWorkouts = () => dispatch => {
  return WorkoutAPIUtil.fetchWorkouts().then((workouts) => {
    dispatch(receiveWorkouts(workouts));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const fetchWorkout = id => dispatch => {

  return WorkoutAPIUtil.fetchWorkout(id).then((workout) => {
    dispatch(receiveWorkout(workout));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const createWorkout = workout => dispatch => {
  return WorkoutAPIUtil.createWorkout(workout).then((payload) => {
    dispatch(receiveWorkout(payload));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const updateWorkout = workout => dispatch => {

  return WorkoutAPIUtil.updateWorkout(workout).then((payload) => {
    dispatch(receiveWorkout(payload));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const deleteWorkout = id => dispatch => {
  debugger
  return WorkoutAPIUtil.deleteWorkout(id).then((id) => {
    dispatch(removeWorkout(id));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};
