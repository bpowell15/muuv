import React from 'react';
import merge from 'lodash/merge';

const mapOptions = {
  // center: this.state.center,
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
  hideBikeLayer: true
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
      center: {lat: 40.730610, lng: -73.935242},
      layerOn: false,
      markers: []

    };
    this.toggleBikeLayer = this.toggleBikeLayer.bind(this);
    this.getElevationChange= this.getElevationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    } else {
      //add error
    }

    this.addMapListeners();
  }



  addMapListeners(){
    google.maps.event.addListener(this.map, 'click', (event)=>{
      this.placeMarker(event.latLng);

    });

  }

  placeMarker(location){
    if (this.state.markers.length < 2){
      const marker = new google.maps.Marker({
        position: location,
        map: this.map
      });
      this.state.markers.push(marker);
      google.maps.event.addListener(marker, 'click', ()=>{
        marker.setMap(null);
        const markerIdx = thisw.state.markers.indexOf(marker);
        if (markerIdx > -1) {
          this.state.markers.splice(markerIdx, 1);
        }
      });
    }
    if (this.state.markers.length === 2) {
      this.createRouteRequest();
    }
  }


  createRouteRequest(){
    const routeRequest = {
      origin: this.state.markers[0].getPosition(),
      destination: this.state.markers[1].getPosition(),
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
        this.setState({markers: []});
      }
    });
  }

  getElevationChange(elevations, status){
    if (status === "OK") {
      let totalElevation = 0;
      for (let i = 1; i < elevations.length; i++) {
        if (elevations[i].elevation - elevations[i-1].elevation) {
          let change = elevations[i].elevation - elevations[i-1].elevation;
          totalElevation += change;
        }
      }

      totalElevation = Math.round(totalElevation * 3.28084);
      this.setState({elevation: totalElevation});
    }
  }

  toggleBikeLayer() {
   // toggles bicycling layer based on layerOn boolean
   if (this.state.layerOn) {
     bikeLayer.setMap(null);
     this.setState({layerOn: false});
   } else {
     bikeLayer.setMap(this.route_map);
     this.setState({layerOn: true});
   }
 }
  //   this.poly = new google.maps.Polyline({
  //     strokeColor: '#fc4c02',
  //     strokeOpacity: 1.0,
  //     strokeWeight: 3,
  //   });
  //   this.poly.setMap(this.map);
  //   let coord = this.map.addListener('click', this.addLatLng.bind(this));
  //
  //   let bikeLayer = new google.maps.BicyclingLayer();
  //   bikeLayer.setMap(this.map);
  //
  //   // let elevator = new google.maps.ElevationService;
  //
  //   // this.map.addListener('click', function(e) {
  //   //
  //   //   this.displayLocationElevation(e.latLng, elevator, infowindow).bind(this);
  //   // });
  // }
  //
  // displayLocationElevation(location, elevator, infowindow) {
  //   //initiate the local request
  //
  //   elevator.getElevationForLocations({
  //     'locations': [location]
  //   }, function(results, status) {
  //     infowindow.setPosition(location);
  //     if (status === 'OK') {
  //       //retreive the first result
  //       if (results[0]) {
  //         //open the infowindow indicating the elvation at the clicked position
  //         infowindow.setContent('The elevation at this point is' + results[0].elevation + 'meters');
  //       } else {
  //         infowindow.setContent('no results found');
  //       }
  //     } else {
  //       infowindow.setContent('Elevation service failed due to: ' + status);
  //     }
  //   });
  // }


  // addLatLng(e){
  //   let path = this.poly.getPath();
  //   path.push(e.latLng);
  //   this.setState({path: path});
  //   //
  //   this.props.fetchElevation(this.state.path);
  // }

  handleSubmit(e){
    e.preventDefault();

    let route = {
      title: this.state.title,
      polyline: this.state.path,
      elevation: this.state.elevation,
      distance: this.state.distance
    };

    console.log(route.polyline);
    this.props.createRoute(route).then(this.props.history.push('/routes'));
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


  render () {
    return (<div>
      <div id='map-container' ref={ map => this.mapNode = map }></div>
      <div className='instructions'><h3>To Create A Route</h3>
        <ol>
          <li>Click a starting position</li>
          <li>Click an ending position</li>
          <li>Add a Title</li>
          <li>Click Save!</li>
        </ol>
      </div>
      <div className="route-form">
        <div><h2>{this.state.distance} miles</h2><h3>Distance</h3></div>
        <div><h2>{this.state.elevation} feet</h2><h3>Elevation Change</h3></div>
        <div>
        <input type="text" onChange={this.update('title')} value={this.state.title} placeholder="Add a title"></input>
        <button id="map-save" onClick={this.handleSubmit}>Save</button>
        </div>
      </div>
    </div>
    );
  }
}
export default Map;
