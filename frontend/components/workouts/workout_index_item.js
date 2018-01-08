import React from 'react';


class WorkoutIndexItem extends React.Component {
  constructor(props){
    debugger
    super(props);
  }
  render () {
    return(
      <div className="workoutItem">
        <div className="name-date">
          <h3>{`{this.props.user.fname} {this.props.user.lname}`}</h3>
          <p>{this.props.workout.date} at {this.props.workout.time}</p>
        </div>
        <div className="workout-mini-stats">
          <h3>{this.props.workout.title}</h3>
          <p>{this.props.workout.distance}{this.props.workout.distanceUnit}{this.props.workout.elevation}{this.props.workout.elevationUnit}</p>
        </div>
        <div className="route-map"></div>
      </div>
    );
  }
}

export default WorkoutIndexItem ;
