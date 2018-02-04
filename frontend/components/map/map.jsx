import React from 'react';
import merge from 'lodash/merge';

const mapOptions = {
  center: {lat: 40.730610, lng: -73.935242},
  zoom: 13,
  styles: [
{
"elementType": "geometry",
"stylers": [
  {
    "color": "#ebe3cd"
  }
]
},
{
"elementType": "labels",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#523735"
  }
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#f5f1e6"
  }
]
},
{
"featureType": "administrative",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#c9b2a6"
  }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#dcd2be"
  }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#ae9e90"
  }
]
},
{
"featureType": "administrative.neighborhood",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "landscape.natural",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dfd2ae"
  }
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dfd2ae"
  }
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#93817c"
  }
]
},
{
"featureType": "poi.park",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#a5b076"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#447530"
  }
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
  {
    "color": "#f5f1e6"
  }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
  {
    "color": "#fdfcf8"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
  {
    "color": "#f8c967"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#e9bc62"
  }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry",
"stylers": [
  {
    "color": "#e98d58"
  }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#db8555"
  }
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#806b63"
  }
]
},
{
"featureType": "transit.line",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dfd2ae"
  }
]
},
{
"featureType": "transit.line",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#8f7d77"
  }
]
},
{
"featureType": "transit.line",
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#ebe3cd"
  }
]
},
{
"featureType": "transit.station",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dfd2ae"
  }
]
},
{
"featureType": "water",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#b9d3c2"
  }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#92998d"
  }
]
}
]
};


const bikeLayer = new google.maps.BicyclingLayer();
const directionsService = new google.maps.DirectionsService();
const directionsDisplay = new google.maps.DirectionsRenderer({
  draggable: true
});
const elevationService = new google.maps.ElevationService;

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      distance: 0,
      elevation: 0,
      path: [],
      polyline: [],
      waypoints: [],
      center: {lat: 40.730610, lng: -73.935242},
      markers: [],
      errors: [],
      duration: 0
    };
    this.getElevationChange= this.getElevationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
  }

  componentDidMount(){
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    directionsDisplay.setMap(null);
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.map.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }

    this.poly = new google.maps.Polyline({
      strokeColor: '#fc4c02',
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });

    this.addMapListeners();
  }

  addLatLng(e){
  let path = this.poly.getPath();
  path.push(e.latLng);
  this.setState({polyline: path});
}



  addMapListeners(){
    google.maps.event.addListener(this.map, 'click', (event)=>{
      this.placeMarker(event.latLng);
    });
    this.map.addListener('click', this.addLatLng.bind(this));
    directionsDisplay.addListener('directions_changed', ()=> {
      this.computeTotalDistance(directionsDisplay.getDirections());
    });
  }

  computeTotalDistance(result) {
      let total = 0;
      let myRoute = result.routes[0];
      for (let i = 0; i < myRoute.legs.length; i++) {
        total += myRoute.legs[i].distance.value;
      }

      total = Math.round( (total / 1000) * 0.621371 * 10 ) / 10;
      this.setState({distance: total,
      path: myRoute.overview_polyline,
      duration: myRoute.legs[0].duration.text,
    });
      elevationService.getElevationAlongPath({
        'path': myRoute.overview_path,
        'samples': 256
      }, this.getElevationChange);
    }

  placeMarker(location){
    let marker;
    if (this.state.markers.length < 2 ){
      marker = new google.maps.Marker({
       position: location,
       map: this.map
     });
      this.state.markers.push(marker);
    } else if (this.state.waypoints.length === 23) {
      if (!this.state.errors.includes('Maximum Waypoints Selected. Save or Start Over. Try Dragging White Circles for Further Manipultaion.')) {
        this.state.errors.push('Maximum Waypoints Selected. Save or Start Over. Try Dragging White Circles for Further Manipultaion.');
      }
      return null;
    } else {
      marker = new google.maps.Marker({
       position: location,
       map: this.map
     });
      let last = this.state.markers.pop();
      this.state.markers.push(marker);
      this.state.waypoints.push(last);
    }

    if (this.state.markers.length === 2) {
      this.createRouteRequest();
    }
  }


  createRouteRequest(){
    this.setState({waypoints: this.state.polyline.b.slice(1, this.state.polyline.b.length).map((coord)=>{
      return {location: new google.maps.LatLng(coord.lat(), coord.lng()), stopover: false};
    }) }) ;
    const routeRequest = {
      origin: this.state.markers[0].getPosition(),
      destination: this.state.markers[1].getPosition(),
      waypoints: this.state.waypoints,
      travelMode: 'BICYCLING'
    };

    directionsService.route(routeRequest, (directions, status)=>{
      if (status === 'OK'){
        this.setState({showErrors: false});
        directionsDisplay.setMap(this.map);
        directionsDisplay.setDirections(directions);
        this.setState({createDisabled: false});
        this.setState({path: directions.routes[0].overview_polyline});

        const distLong = directions.routes[0].legs[0].distance.value/1609.34;
        const dist = Math.round(distLong * 10) /10;
        this.setState({distance:dist});
        this.setState({distString: directions.routes[0].legs[0].distance.text});
        const pathArr = directions.routes[0].overview_path;
        elevationService.getElevationAlongPath({
          'path': pathArr,
          'samples': 256
        }, this.getElevationChange);
        this.state.markers[0].setMap(null);
        this.state.markers[1].setMap(null);
      }
    });
  }

  getElevationChange(elevations, status){
    if (status === "OK") {
      let totalElevation = 0;
      for (let i = 1; i < elevations.length; i++) {
        if (elevations[i].elevation - elevations[i-1].elevation) {
          let change = elevations[i].elevation - elevations[i-1].elevation;
          if (change > 0) {
          totalElevation += change;
          }
        }
      }
      totalElevation = Math.round(totalElevation * 3.28084);
      this.setState({elevation: totalElevation});
    }
  }

  handleSubmit(e){
    e.preventDefault();

    let route = {
      title: this.state.title,
      polyline: this.state.path,
      elevation: this.state.elevation,
      distance: this.state.distance,
      duration: this.state.duration
    };
    if (this.state.title === ""){
      if (this.state.errors.includes('Please Add a Title.') === false)
      this.state.errors.push('Please Add a Title.');
    } else {
    this.props.createRoute(route).then(this.props.history.push('/routes'));
  }
}



  update(field) {
    return(
      e => {
        return (
          this.setState({
            [field]: e.currentTarget.value
          })
        );
      }
    );
  }

  renderErrors() {
    if (this.state.errors.length > 0) {
      return(
        <ul className="map-errors">
          {this.state.errors.map((error, i) => (
            <li key={`error-${i}`} className="route-error">
              {error}
            </li>
          ))}
        </ul>
      );
    }

    this.state.errors = [];
  }
  render () {


    return (<div>
      <div id='map-container' ref={ map => this.mapNode = map }></div>
        {this.renderErrors()}
      <div className='instructions'><h3>To Create A Route</h3>
        <ol>
          <li>Click a starting position</li>
          <li>Select waypoints along route</li>
          <li>Click an ending position</li>
          <li>Add a Title</li>
          <li>Click Save!</li>
          <li className='tip'>Try dragging the route for further manipultaion</li>
        </ol>
      </div>
      <div className="route-form">
        <div><h2>{this.state.distance} miles</h2><h3>Distance</h3></div>
        <div><h2>{this.state.elevation} feet</h2><h3>Elevation Gain</h3></div>
        <div><h2>{this.state.duration}</h2><h3>Estimated Duration</h3></div>
        <div>
        <input type="text" onChange={this.update('title')} value={this.state.title}  maxLength="20" placeholder="Add a title"></input>
        <button id="map-save" onClick={this.handleSubmit}>Save</button>
        </div>
      </div>
    </div>
    );
  }
}
export default Map;
