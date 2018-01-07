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

export const clearERRORS = () => {
  return {
    type: CLEAR_ERRORS
  };
};
