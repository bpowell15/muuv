import React from 'react';
import merge from 'lodash/merge';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: null,
      distance: 15,
      elevation: 100,
      path: null,
      center: {lat: 40.730610, lng: -73.935242}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const mapOptions = {
      center: this.state.center,
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

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer(

    );

    this.poly = new google.maps.Polyline({
      strokeColor: '#fc4c02',
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });
    this.poly.setMap(this.map);
    this.map.addListener('click', this.addLatLng.bind(this));

    let bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(this.map);

    let elevator = new google.maps.ElevationService;

    // this.map.addListener('click', function(e) {
    //
    //   this.displayLocationElevation(e.latLng, elevator, infowindow).bind(this);
    // });
  }
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


  addLatLng(e){
    let path = this.poly.getPath();
    path.push(e.latLng);
    this.setState({path: path});
    debugger
    this.props.fetchElevation(this.state.path);
  }

  handleSubmit(e){
    e.preventDefault();

    let route = {
      title: this.state.title,
      polyline: this.state.path,
      elevation: this.state.elevation,
      distance: this.state.distance
    };

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
      <div className="route-form">
        <input type="text" onChange={this.update('title')} value={this.state.title} placeholder="Add a title"></input>
        <button id="map-save" onClick={this.handleSubmit}>Save</button>
      </div>
    </div>
    );
  }
}
export default Map;
