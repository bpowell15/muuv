import React from 'react';


class Map extends React.Component {

  constructor(props){
    super(props);


  }

  componentDidMount(){
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.poly = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.poly.setMap(this.map);
    this.map.addListener('click', this.addLatLng.bind(this));

  }


  addLatLng(e){
    let path = this.poly.getPath();
    path.push(e.latLng);
  }


  render () {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}
export default Map;
