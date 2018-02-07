export const fetchRoutes = () => (
  $.ajax({
    method: "GET",
    url: "/api/routes"
  })
);

export const fetchRoute = (routeId) => {
  
  return (
    $.ajax({
      method: "GET",
      url: `/api/routes/${routeId}`
    })
  );
};

export const createRoute = (route) => {

  return (
      $.ajax({
        method: "POST",
        url: "api/routes",
        data: {route:{
          title: route.title,
          distance: route.distance,
          elevation: route.elevation,
          polyline: route.polyline,
          duration: route.duration
      }}
    })
  );
};

export const deleteRoute = (routeId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/routes/${routeId}`
  })
);
