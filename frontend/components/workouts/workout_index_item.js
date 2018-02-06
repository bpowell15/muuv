import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import WorkoutShowContainer from './workout_show_container';
// import RouteIndexItem from '../routes/route_index_item';
class WorkoutIndexItem extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   show: false
    // };
    // this.toggleShow = this.toggleShow.bind(this);
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


  spriteToggle(){
    if (this.props.workout.sport === 'Ride') {
      return 'bike-sprite';
    } else if (this.props.workout.sport === 'Run') {
      return 'run-sprite';
    } else if (this.props.workout.sport === 'Code') {
      return 'code-sprite';
    }
    return 'swim-sprite';
  }

  routeImage(){

    if (this.props.workout.route) {
      return (
      <img className="wrk-route-img" src={`https://maps.googleapis.com/maps/api/staticmap?size=233x130&scale=2&path=weight:3%7Ccolor:0x0000ff%7Cenc:${this.props.workout.route.polyline}&key=AIzaSyC3Supo7gTtIjC8R6iANlG-BVdpKOOzG38&style=element:geometry%7Ccolor:0xebe3cd&style=element:labels.text.fill%7Ccolor:0x523735&style=element:labels.text.stroke%7Ccolor:0xf5f1e6&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xc9b2a6&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0xdcd2be&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xae9e90&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x93817c&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0xa5b076&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x447530&style=feature:road%7Celement:geometry%7Ccolor:0xf5f1e6&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road.arterial%7Celement:geometry%7Ccolor:0xfdfcf8&style=feature:road.highway%7Celement:geometry%7Ccolor:0xf8c967&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xe9bc62&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0xe98d58&style=feature:road.highway.controlled_access%7Celement:geometry.stroke%7Ccolor:0xdb8555&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x806b63&style=feature:transit.line%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:transit.line%7Celement:labels.text.fill%7Ccolor:0x8f7d77&style=feature:transit.line%7Celement:labels.text.stroke%7Ccolor:0xebe3cd&style=feature:transit.station%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:water%7Celement:geometry.fill%7Ccolor:0xb9d3c2&style=feature:water%7Celement:labels.text%7Cvisibility:off&style=feature:water%7Celement:labels.text.fill`}></img>
      );
    } else {
      return <img></img>;
    }
  }

  render () {
    // let showContainer;

    // if (!this.state.show) {
    //   showContainer = null;
    // } else {
    //   showContainer = (
    //     <WorkoutShowContainer workout={this.props.workout} />
    //   );
    // }

  return(
    <div className="workout-route-item">
      <div className="workoutItem">
      <div className="user-image-type">
        <div className="prof-pic"></div>
          <div className={this.spriteToggle()}></div>
            </div>
              <div className="name-date">
                <h3>{this.props.user.fname} {this.props.user.lname}</h3>
                <p>{moment(this.props.workout.date).calendar()}</p>
              </div>
              <div className="workout-mini-stats">
              <Link to={`/workouts/${this.props.workout.id}`}>{this.props.workout.title}</Link>
              <ul><li>{this.props.workout.distance}{this.props.workout.distance_unit}</li><li>{this.props.workout.elevation}{this.props.workout.elevation_unit}</li><li><h3>({this.duration()})</h3></li></ul>
              <p><Link to={`/workouts/${this.props.workout.id}`} >{this.props.workout.description}</Link></p>
            </div>

          </div>
          <Link className="show-link" to={`/workouts/${this.props.workout.id}`} >{this.routeImage()}</Link>
        </div>
      );
    }
  }

export default WorkoutIndexItem ;
