import React from 'react';


class Map extends React.Component {

  componentDidMount(){
    let poly;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    poly = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    poly.setMap(this.map);
    this.map.addListener('click', this.addLatLng);
  }

  addLatLng(e){
    let path = poly.getPath();
    path.push(e.latLng);
  }


  render () {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}
export default Map;
