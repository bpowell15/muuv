export const fetchWorkouts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/workouts'
  });
};

export const fetchWorkout = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/workouts/${id}`
  });
};

export const createWorkout = ({workout}) => {
  return $.ajax({
    method: 'POST',
    url: 'api/workouts',
    data: { workout }
  });
};

export const updateWorkout = (workout) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/workouts/${workout.id}`
  });
};

export const deleteWorkout = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/workouts/${id}`
  });
};
