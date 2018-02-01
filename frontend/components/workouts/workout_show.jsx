import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import WorkoutEditContainer from '../workout_form/workout_edit_container';
import Mapp from '../map/mapp';
import ElevationGraph from './elevation_graph';
class WorkoutShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showEdit: false,
      showMap: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
    this.chartClassToggle = this.chartClassToggle.bind(this);
  }

  componentDidMount(){
    this.props.fetchWorkout(this.props.match.params.workoutId);
    this.props.fetchRoute(this.props.workout.route_id);
  }


  averageSpeed(){
    let distance;
    if ( this.props.workout.distance_unit === 'yards') {
      distance = Math.round((this.props.workout.distance * .000568182)*10)/10;
    } else if (this.props.workout.distance_unit === 'meters') {
      distance = Math.round((this.props.workout.distance * .001)*10)/10;
    } else {
      distance = this.props.workout.distance;
    }
      let hrs = this.props.workout.duration_hours + (this.props.workout.duration_minutes / 60 ) +  (this.props.workout.duration_seconds / 3600)
      if (hrs <= 0) {
        return 0;
      }
      let unitPerHour = distance / hrs;
      return Math.round( unitPerHour * 10)/10;
  }

  unitPerHour(){
    let unit = this.props.workout.distance_unit;
    if (unit === 'miles' || unit === 'yards'){
      return 'MPH';
    }

    return 'KmPH';
  }

  parseDate(){
    let parseTime = moment(this.props.workout.time).format('h:mm a');
    let parseDay = moment(this.props.workout.date).format('dddd');
    let parseMonth = moment(this.props.workout.date).format('MMMM Do YYYY');
    let newDateString = `${parseTime} on ${parseDay}, ${parseMonth}`;
    return newDateString;
  }
  duration(){
    let secs;
    let mins;
    let hrs = this.props.workout.duration_hours;

    if (this.props.workout.duration_seconds < 10) {
      secs = `0${this.props.workout.duration_seconds}`;
    } else {
      secs = `${this.props.workout.duration_seconds}`;
    }

    if (this.props.workout.duration_minutes < 10) {
      mins = `0${this.props.workout.duration_minutes}`;
    } else {
      mins = `${this.props.workout.duration_minutes}`;
    }

    if (hrs === 0) {
      return(
        `${mins}:${secs}`
      );
    } else {
      return (
      `${hrs}:${mins}:${secs}`
    );
    }
  }

  // showMap(){
  //
  //   if (this.props.workout){
  //   return (
  //   <Mapp polyline={this.props.workout.route.polyline}/>
  //   );
  // }
  // }

  handleDelete(){
    this.props.deleteWorkout(this.props.workout.id).then(this.props.history.push('/workouts'));
  }

  toggleEdit(){
    if (!this.state.showEdit) {
      this.setState({showEdit: true});
    } else {
      this.setState({showEdit: false});
    }
  }

  toggleRender(){
    if (this.props.workout.route) {
      return (
        <img className="wrk-route-image" src={`https://maps.googleapis.com/maps/api/staticmap?size=518x350&scale=2&path=weight:3%7Ccolor:0x0000ff%7Cenc:${this.props.workout.route.polyline}&key=AIzaSyC3Supo7gTtIjC8R6iANlG-BVdpKOOzG38&style=element:geometry%7Ccolor:0xebe3cd&style=element:labels.text.fill%7Ccolor:0x523735&style=element:labels.text.stroke%7Ccolor:0xf5f1e6&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xc9b2a6&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0xdcd2be&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xae9e90&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x93817c&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0xa5b076&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x447530&style=feature:road%7Celement:geometry%7Ccolor:0xf5f1e6&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road.arterial%7Celement:geometry%7Ccolor:0xfdfcf8&style=feature:road.highway%7Celement:geometry%7Ccolor:0xf8c967&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xe9bc62&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0xe98d58&style=feature:road.highway.controlled_access%7Celement:geometry.stroke%7Ccolor:0xdb8555&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x806b63&style=feature:transit.line%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:transit.line%7Celement:labels.text.fill%7Ccolor:0x8f7d77&style=feature:transit.line%7Celement:labels.text.stroke%7Ccolor:0xebe3cd&style=feature:transit.station%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:water%7Celement:geometry.fill%7Ccolor:0xb9d3c2&style=feature:water%7Celement:labels.text%7Cvisibility:off&style=feature:water%7Celement:labels.text.fill`}></img>
    );
    } else {
      return <img></img>;
    }
  }

  toggleTitle(){
    if (this.props.workout.route) {
      return (
        <h1>{this.props.workout.route.title}</h1>
      );
    }
  }

  toggleShow(){
    if (!this.state.showMap){
       return "";
    } else {
      return "show fadeIn";
    }
  }

toggleMap(){
    if (this.state.showMap === true) {
      this.setState({showMap: false});
    } else {
      this.setState({showMap: true});
    }
  }


  chartClassToggle(){
    debugger
    if (this.state.showMap === true){
      return 'elevation-graph map';
    } else {
      return 'elevation-graph';
    }
  }



  render () {
      let showEdit;
      let showGraph;
      let chartToggle;
      if (!this.state.showEdit) {
        showEdit = null;
      } else {
        showEdit = (<WorkoutEditContainer className="editModal" workout = { this.props.workout } toggleEdit={ this.toggleEdit } />
    );
      }

      if (this.props.workout.route) {
        showGraph = <ElevationGraph polyline={ this.props.workout.route.polyline } />
      } else {
        showGraph = null;
      }



    return(
      <div className='info-section'>
        <div className="show-page">
          {showEdit}
          <div className="show-nav">
            <a className="edit" onClick={this.toggleEdit}>Edit</a>
            <a className="delete" onClick={this.handleDelete}>Delete</a>
          </div>
          <div className="workout-show-content">
          <header className="workout-header">
            <h2>{this.props.user.fname}{this.props.user.lname} - {this.props.workout.sport}</h2>
          </header>
          <div className="show-details">
            <div className="show-profile-pic"></div>
            <div className="workout-details description">
              <h2>{this.parseDate()}</h2><h1>{this.props.workout.title}</h1><p>{this.props.workout.description}</p>
            </div>
            <div className="workout-stats">
              <ul>
                <li><h1>{this.props.workout.distance}{this.props.workout.distance_unit}</h1><h2>Distance</h2></li>
                <li><h1>{this.duration()}</h1><h2>Moving Time</h2></li>
                <li><h1>{this.props.workout.elevation}{this.props.workout.elevation_unit}</h1><h2>Elevation</h2></li>
              </ul>
              <div className="stats-low">
                <h1>{this.averageSpeed()}{this.unitPerHour()}</h1><h3>Average Speed</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`show-route animated ${this.toggleShow()}`} onClick={this.toggleMap}>
        <div className="route-img-title">{this.toggleTitle()}</div>
        {this.toggleRender()}
      </div>
      <div className={this.chartClassToggle()}>
        {showGraph}
      </div>
    </div>
    );
  }
}

export default WorkoutShow;
