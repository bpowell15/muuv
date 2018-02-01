import React from 'react';
import RouteIndexItem from './route_index_item';
import {Link} from 'react-router-dom';
import RouteShow from './route_show.jsx';

class RouteIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
    this.showModal = this.showModal.bind(this);

  }
  componentDidMount (){
    this.props.fetchRoutes();
  }

  showModal(){
    debugger
      if (!this.state.showModal){
      this.setState({showModal: true});
    } else {
      this.setState({showModal: false});
    }
  }


  render () {
    let modal;
    if (this.state.showModal){
      modal = <RouteShow route = {this.props.route} />;
    } else {
      modal = null;
    }

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
          {modal}
      <div className="routes-feed">
        <header className="route-index-header">
          <h1 className="route-index-title">My Routes</h1>
          <Link to='/routes/new' className="create-route-button">Create New Route</Link>
        </header>
        <ul className="maps-index">
          {
            orderedRoutes.map((route) => (
            <RouteIndexItem onClick={this.showModal} key={route.id}
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
