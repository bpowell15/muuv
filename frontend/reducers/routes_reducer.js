import merge from 'lodash/merge';

import {
  RECEIVE_ROUTES,
  RECEIVE_ROUTE,
  REMOVE_ROUTE } from '../actions/route_actions';


const routeReducer = (state ={}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ROUTES:
      return action.routes;
    case RECEIVE_ROUTE:
      newState = merge({}, state, {[action.route.id]: action.route});
      return newState;
    case REMOVE_ROUTE:
      newState = merge({}, state);
      debugger
      delete newState[action.routeID];
      return newState;
    default:
      return state;
  }
};

export default routeReducer;
