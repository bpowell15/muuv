import React from 'react';
import RouteIndexItem from './route_index_item';
import {Link} from 'react-router-dom';

class RouteIndex extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount (){
    this.props.fetchRoutes();
  }
  render () {
    let routes = this.props.routes.slice();
    let orderedRoutes = routes.reverse();
    if (routes.length === 0) {
      return (
        <div className="center-routes">
        <div className="empty-routes-feed">
          <h1 className="routes-index-title">My Routes</h1>
          <Link to='/routes/new' className="create-route-button">Create New Route</Link>
          <h2>No routes yet, try creating one.(Checkout the + dropdown)</h2>
        </div>
        </div>
      );
    }

    return (
        <div className="center-routes">
      <div className="routes-feed">
        <header className="route-index-header">
          <h1 className="route-index-title">My Routes</h1>
          <Link to='/routes/new' className="create-route-button">Create New Route</Link>
        </header>
        <ul className="maps-index">
          {
            orderedRoutes.map((route) => (
            <RouteIndexItem key={route.id}
              deleteRoute={this.props.deleteRoute}
              route={route}
              />
          ))
        }
        </ul>
      </div>
    </div>
    );
  }
}

export default RouteIndex;
