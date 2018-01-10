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
    let workouts = this.props.workouts.slice();
    let chronologicalOrder = workouts.reverse();
    if (workouts.length === 0) {
      return (
      <div className="workout-feed">
        <h1>Activity Feed</h1>
        <h2>Create your first workout now!(try the + dropdown)</h2>
      </div>
    );
    }
      return (
        <div className="workout-feed">
          <h1>Activity Feed</h1>

          <ul>
          {
            chronologicalOrder.map((workout) => (
              <WorkoutIndexItem
                key={workout.id}
                deletePost={this.props.deleteWorkout}
                workout={workout}
                user={this.props.user}
                author={workout.user_id}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}
export default WorkoutIndex ;
