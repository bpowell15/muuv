import React from 'react';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {
  constructor(props){

    super(props);
  }

  componentDidMount(){
    this.props.fetchWorkouts();
  }

  render () {
    const reverse = this.props.workouts.reverse();
      return (
        <div className="workout-feed">
          <h1>Activity Feed</h1>

          <ul>
          {
            reverse.map((workout) => (
              <WorkoutIndexItem key={workout.id} deletePost={this.props.deleteWorkout} workout={workout} user={this.props.user} />
            ))
          }
        </ul>
      </div>
    );
  }
}
export default WorkoutIndex ;
