import React from 'react';


class WorkoutIndexItem extends React.Component {
  constructor(props){

    super(props);
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
    }
  }

  render () {
    return(

      <div className="workoutItem">
      <div className="user-image-type">
        <div className="prof-pic"></div>
        <div className={this.spriteToggle()}></div>
      </div>
        <div className="name-date">
          <h3>{this.props.user.fname} {this.props.user.lname}</h3>
          <p>{this.props.workout.date} at {this.props.workout.time}</p>
        </div>
        <div className="workout-mini-stats">
          <a href="#">{this.props.workout.title}</a>
          <ul><li>{this.props.workout.distance}{this.props.workout.distance_unit}</li><li>{this.props.workout.elevation}{this.props.workout.elevation_unit}</li></ul>
          <p><a href="#">{this.props.workout.description}</a><h3>({this.duration()})</h3></p>
        </div>
        <div className="route-map"></div>
      </div>

    );
  }
}

export default WorkoutIndexItem ;
