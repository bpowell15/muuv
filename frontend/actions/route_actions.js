import * as RouteAPIUtil from '../api_util/route_api_util';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';


export const receiveRoutes = (routes) => {
  return {
    type: RECEIVE_ROUTES,
    routes
  };
};

export const receiveRoute = (route) => {
  return {
    type: RECEIVE_ROUTE,
    route
  };
};

export const removeRoute = (routeID) => {
  return {
    type: REMOVE_ROUTE,
    routeID
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ROUTE_ERRORS,
    errors
  };
};


export const fetchRoutes = () => dispatch => {
  return RouteAPIUtil.fetchRoutes().then((routes) => {
    dispatch(receiveRoutes(routes));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const fetchRoute = id => dispatch => {
  return RouteAPIUtil.fetchRoute(id).then((route) => {
    dispatch(receiveRoute(route));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const createRoute = route => dispatch => {
  return RouteAPIUtil.createRoute(route).then((payload) => {
    dispatch(receiveRoute(payload));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};


export const deleteRoute = id => dispatch => {
  return RouteAPIUtil.deleteRoute(id).then(() => {
    dispatch(removeRoute(id));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};
