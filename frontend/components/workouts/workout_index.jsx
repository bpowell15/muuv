import React from 'react';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {
  constructor(props){
    debugger
    super(props);
  }

  componentDidMount(){
    this.props.fetchWorkouts();
  }

  render () {
      return (
        <div>
          <ul>
          {
            this.props.workouts.map((workout) => (
              <WorkoutIndexItem key={workout.id} deletePost={this.props.deleteWorkout} workout={workout} />
            ))
          }
        </ul>
      </div>
    );
  }
}
export default WorkoutIndex ;
