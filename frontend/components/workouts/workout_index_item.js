import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import WorkoutShowContainer from './workout_show_container';
class WorkoutIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    };
    this.toggleShow = this.toggleShow.bind(this);
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

  parseDate(){
    let parseTime = moment(this.props.workout.time).format('hh:mm:ss');
    let parseDate = moment(this.props.workout.date).format('YYYY-MM-DD');
    let newDateString = `${parseDate}T${parseTime}`;
    return (moment(newDateString).calendar());
  }

  toggleShow(){

    this.setState({
      show: !this.state.show
    });
  }

  render () {
    let showContainer;

    if (!this.state.show) {
      showContainer = null;
    } else {
      showContainer = (
        <WorkoutShowContainer workout={this.props.workout} />
      );
    }

    return(
      <div className="workoutItem">
      <div className="user-image-type">
        <div className="prof-pic"></div>
        <div className={this.spriteToggle()}></div>
      </div>
        <div className="name-date">
          <h3>{this.props.user.fname} {this.props.user.lname}</h3>
          <p>{this.parseDate()}</p>
        </div>
        <div className="workout-mini-stats">
          <Link to={`/workouts/${this.props.workout.id}`} >{this.props.workout.title}</Link>
          <ul><li>{this.props.workout.distance}{this.props.workout.distance_unit}</li><li>{this.props.workout.elevation}{this.props.workout.elevation_unit}</li><li><h3>({this.duration()})</h3></li></ul>
          <p><Link to={`/workouts/${this.props.workout.id}`} >{this.props.workout.description}</Link></p>
        </div>
        <div className="route-map"></div>

      </div>
    );
  }
}

export default WorkoutIndexItem ;
