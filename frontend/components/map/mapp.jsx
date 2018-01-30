// import React from 'react';
// import merge from 'lodash/merge';
//
// class Mapp extends React.Component {
//
//   constructor(props){
//     super(props);
//     this.state = {
//       title: 'FIRST',
//       distance: 15,
//       elevation: 100,
//       path: null,
//       center: {lat: 40.730610, lng: -73.935242}
//     };
//   }
//
//   componentDidMount(){
//     const mapOptions = {
//       center: this.state.center,
//       zoom: 13,
//       styles: [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#ebe3cd"
//       }
//     ]
//   },
//   {
//     "elementType": "labels",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#523735"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#f5f1e6"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#c9b2a6"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#dcd2be"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#ae9e90"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.neighborhood",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "landscape.natural",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dfd2ae"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dfd2ae"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#93817c"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#a5b076"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#447530"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#f5f1e6"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#fdfcf8"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#f8c967"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#e9bc62"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway.controlled_access",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e98d58"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway.controlled_access",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#db8555"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#806b63"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dfd2ae"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#8f7d77"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#ebe3cd"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.station",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dfd2ae"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#b9d3c2"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#92998d"
//       }
//     ]
//   }
// ]
//     };
//
//     this.map = new google.maps.Map(this.mapNode, mapOptions);
//     let directionsService = new google.maps.DirectionsService;
//     let directionsDisplay = new google.maps.DirectionsRenderer(
//
//     );
//     let decodedPoly = google.maps.geometry.encoding.decodePath(this.props.polyline)
//     this.poly = new google.maps.Polyline({
//       strokeColor: '#fc4c02',
//       strokeOpacity: 1.0,
//       strokeWeight: 3,
//       path: decodedPath,
//       clickable: false
//     });
//     this.poly.setMap(this.map);
//     this.map.addListener('click', this.addLatLng.bind(this));
//
//     let bikeLayer = new google.maps.BicyclingLayer();
//     bikeLayer.setMap(this.map);
// }
//   addLatLng(e){
//     let path = this.poly.getPath();
//     path.push(e.latLng);
//     this.setState({path: path});
//   }
//
//
//
//   render () {
//     return (
//       <div id='map-container' ref={ map => this.mapNode = map }></div>
//     );
//   }
// }
// export default Mapp;
