import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';


class RouteIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    this.props.deleteRoute(this.props.route.id);
  }





  render () {
    return (
    <div className="routeItem">
      <Link to={`/routes/${this.props.route.id}`}>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?size=290x180&scale=1&path=weight:3%7Ccolor:0x0000ff%7Cenc:${this.props.route.polyline}&key=AIzaSyC3Supo7gTtIjC8R6iANlG-BVdpKOOzG38&style=element:geometry%7Ccolor:0xebe3cd&style=element:labels.text.fill%7Ccolor:0x523735&style=element:labels.text.stroke%7Ccolor:0xf5f1e6&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xc9b2a6&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0xdcd2be&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xae9e90&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x93817c&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0xa5b076&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x447530&style=feature:road%7Celement:geometry%7Ccolor:0xf5f1e6&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road.arterial%7Celement:geometry%7Ccolor:0xfdfcf8&style=feature:road.highway%7Celement:geometry%7Ccolor:0xf8c967&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xe9bc62&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0xe98d58&style=feature:road.highway.controlled_access%7Celement:geometry.stroke%7Ccolor:0xdb8555&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x806b63&style=feature:transit.line%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:transit.line%7Celement:labels.text.fill%7Ccolor:0x8f7d77&style=feature:transit.line%7Celement:labels.text.stroke%7Ccolor:0xebe3cd&style=feature:transit.station%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:water%7Celement:geometry.fill%7Ccolor:0xb9d3c2&style=feature:water%7Celement:labels.text%7Cvisibility:off&style=feature:water%7Celement:labels.text.fill`}>
        </img>
      </Link>
        <div className="route-info">
          <div className="first-line">
            <Link to={`/routes/${this.props.route.id}`}><h3 className="title-link">{this.props.route.title}</h3></Link>
            <div onClick={this.handleDelete}>Delete</div>
          </div>
          <div className="routestats">
            <p className="title-link"><strong>{this.props.route.distance}</strong>mi<br></br><small>Distance</small></p>
            <p className="title-link"><strong>{this.props.route.elevation}</strong> ft<br></br><small>Elevation Gain</small></p>
          </div>
          <p className="title-link"><small>Est. Duration</small> {moment.duration(((this.props.route.distance/10)* 3600), "seconds").format("h[hrs ]mm[mins ]")}</p>
          <p className="title-link date">Created On {moment(this.props.route.created_at).format('MMMM Do, YYYY')}</p>
        </div>
    </div>
  );
  }
}

export default RouteIndexItem ;