import React from 'react';
import {Link} from 'react-router-dom';

class RouteIndexItem extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
    <div className="routeItem">
      <Link to={`/routes/${this.props.route.id}`}>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?size=290x180&scale=1&path=weight:3%7Ccolor:fc4c02%7Cenc:${this.props.route.polyline}&key=AIzaSyC3Supo7gTtIjC8R6iANlG-BVdpKOOzG38`}>
        </img>
        <div className="route-info">
          <p className="title-link">{this.props.route.title}</p>
          <p>{this.props.route.create_at}</p>
        </div>
      </Link>
    </div>
  );
  }
}

export default RouteIndexItem ;
