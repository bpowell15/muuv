import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import WorkoutEditContainer from '../workout_form/workout_edit_container';
class WorkoutShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showEdit: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount(){
    this.props.fetchWorkout(this.props.match.params.workoutId);
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


  render () {
      let showEdit;
      if (!this.state.showEdit) {
        showEdit = null;
      } else {
        showEdit = <WorkoutEditContainer className="editModal" workout = { this.props.workout } toggleEdit={ this.toggleEdit }/>;
      }

    return(
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
    );
  }
}

export default WorkoutShow;
