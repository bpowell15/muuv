import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import merge from 'lodash/merge';

class WorkoutForm extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      distance: 0,
      duration_hours: 0,
      duration_minutes: 0,
      duration_seconds: 0,
      elevation: 0,
      sport: 'Ride',
      date: "",
      time: "",
      title: "",
      description: "",
      elevation_unit: 'feet',
      distance_unit: 'miles',
      route_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.routesSelector = this.routesSelector.bind(this);
  }

  componentDidMount(){
    this.props.fetchRoutes();
  }

  // updateState(){
  //
  //   if (this.state.route_id !== null) {
  //     this.state.merge
  //     return this.setState({
  //       distance: this.props.routes[this.state.route_id].distance,
  //       elevation: this.props.routes[this.state.route_id].elevation
  //     });
  //   }
  // }

  handleSubmit(e){
    e.preventDefault();
    const workout = this.state;
    this.props.processForm(workout).then(() => {
      this.props.history.push('/workouts');
      this.props.clearErrors();
    });
  }

  update(field) {
    if (field === "route_id"){
      return(
        e => {
          return (
            this.setState({
              [field]: e.currentTarget.value,
              distance: this.props.routes[e.currentTarget.value].distance,
              elevation: this.props.routes[e.currentTarget.value].elevation
            })
          );
        }
      );
    } else {
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
  }


  renderErrors() {
    if (this.props.errors) {
      return(

        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="login-error">
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }




  routesSelector(){
    let keys = Object.keys(this.props.routes);
    return (
    <select className="select-dropdown route" onChange={this.update('route_id')} value={this.state.route_id}>
        <option defaultValue>Choose One</option>
        {keys.map((key)=> (
          <option value={key} key={this.props.routes[key].id}>{this.props.routes[key].title}</option>
        )
      )}
    </select>
    );
  }

  render () {
    return (
    <div className="page-container" onClick={this.props.clearErrors}>
      <h1>Manual Entry</h1>
      <form id="new-activity" className="create-workout-form" onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <div className="row">

          <div className="distance-input">
            <label className="input-label">Distance</label><br></br>
            <div className="distance">
              <input type="number" max='9999' min='0' step="0.1" onChange={this.update('distance')} value={this.state.distance} />
                <select className="select-dropdown" onChange={this.update('distance_unit')} value={this.state.distance_unit}>
                  <option value="kilometers">kilometers</option>
                  <option value="meters">meters</option>
                  <option defaultValue="miles">miles</option>
                  <option value="yards">yards</option>
                </select>
              </div>
          </div>

          <div className="duration-input">
            <label className="input-label">Duration</label><br></br>
            <div className="distance">
              <input type="number" max='9999' min='00'className="hour-input" onChange={this.update('duration_hours')} value={this.state.durationHours} placeholder="hr"  />
              <input type="number" max='59' min='00' className="minute-input" onChange={this.update('duration_minutes')} value={this.state.durationMinutes} placeholder="m" />
              <input type="number" max='59' min='00' className="second-input" onChange={this.update('duration_seconds')} value={this.state.durationHours} placeholder="s" />
            </div>
          </div>
            <div className="elevation-input">
              <label className="input-label">Elevation</label><br></br>
                <div className="distance">
                <input type="number" max='99999' step="0.1" onChange={this.update('elevation')} value={this.state.elevation} />
                  <select className="select-dropdown" onChange={this.update('elevation_unit')} value={this.state.elevation_unit}>
                    <option value="meters">meters</option>
                    <option defaultValue="feet">feet</option>
                  </select>
                </div>
          </div>
        </div>

        <div className="input-seperator"></div>

        <div className="row">
          <div className="activity_type">
            <label className="input-label">Sport</label>
            <select className="select-dropdown sport-select" onChange={this.update('sport')} value={this.state.sport}>
              <option defaultValue="Ride">Ride</option>
              <option value="Run">Run</option>
              <option value="Swim">Swim</option>
              <option value="Code">Code</option>
            </select>

          </div>
          <div className="date-time">
            <label className="input-label">Date & Time</label><br></br>
              <input className="date-time-input" type="date" onChange={this.update('date')} placeholder="" />
              <input className="date-time-input" id="time" type="time" onChange={this.update('time')} placeholder="" />

          </div>
          <div className="route-div">
          <label className="input-label">Route
            <div>{this.routesSelector()}</div>
          </label>
        </div>
        </div>

        <div className="row workout-title">
          <label className="input-label">Title</label>
            <input className="title-input" type="text" onChange={this.update('title')} value={this.state.title} placeholder="Afternoon Ride" />

        </div>

        <div className="input-seperator"></div>

        <div className="description-row">
          <label className="input-label">Description</label>
              <textarea className="workout-description" onChange={this.update('description')} value={this.state.description} placeholder="How did it go? See anything cool?"></textarea>
        </div>
        <div className="input-seperator"></div>

        <div className="row submit-workout">
          <input className="submit-button"type="submit" value="Create" />
          <Link to="/workouts">Cancel</Link>
        </div>
      </form>
    </div>
  );
  }
}

export default WorkoutForm;
