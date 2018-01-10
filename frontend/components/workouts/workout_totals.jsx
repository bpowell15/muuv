import React from 'react';


class WorkoutTotals extends React.Component {


  totalDistance(){
    let totalDistance = 0;
    this.props.workouts.forEach((workout)=>{

        switch (workout.distance.unit) {
          case 'kilometers':
            totalDistance += (this.workout.distance * .621371);
            break;
          case 'meters':
            totalDistance += (this.workout.distance * .000621371);
            break;
          case 'yards':
            totalDistance += (this.workout.distance * 1.09361);
            break;
          default:
              totalDistance += workout.distance;
              break;
      }
      return totalDistance;
    });
    return totalDistance;
  }


  totalElevation(){
    let totalElevation = 0;

    switch (workout.distance.unit) {
      case ''
    }
  }


  render () {
    return(
      <div  className="workout-totals">
        <ul>
          <li>{totalDistance}</li>
          <li>{totalElevation}</li>
          <li>{totalDuration}</li>
        </ul>
      </div>
    )
  }
}

export default WorkoutTotals;
