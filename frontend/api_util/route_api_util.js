export const fetchRoutes = () => (
  $.ajax({
    method: "GET",
    url: "/api/routes"
  })
);

export const fetchRoute = (routeId) => (
  $.ajax({
    method: "GET",
    url: `/api/routes/${routeId}`
  })
);

export const createRoute = (routes) => {

  return (
      $.ajax({
        method: "POST",
        url: "api/routes",
        data: {routes:{
          title: routes.title,
          distance: routes.distance,
          elevation: routes.elevation,
          polyline: google.maps.geometry.encoding.encodePath(routes.polyline)
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
