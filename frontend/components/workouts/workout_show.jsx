import React from 'react'

class WorkoutShow extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return(
      <div className="workout-show-page">
        <Link to="/workout/update">Edit</Link>
        <Link to="/workouts" onChange={this.delete()}>Delete</Link>
        <header className="workout-header">
          <h2>{this.workout.user_id.fname}{this.workout.user_id.lname}-{this.workout.sport}</h2>
        </header>
        <div className="workout-details">
          {this.workout.time}{this.workout.date}<h1>{this.workout.title}</h1>
        </div>
        <div className="workout-stats">
          {this.workout.distance}{this.workout.distance_unit}{this.workout.duration}{this.workout.elevation}{this.workout.elevation_unit}
        </div>
        <div>{this.average_speed()}</div>
        {this.renderRouteMap}
      </div>
    );
  }
}

export default WorkoutShow;
