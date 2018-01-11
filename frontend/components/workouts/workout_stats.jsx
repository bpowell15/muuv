import React from 'react';
import moment from 'moment';

class WorkoutStats extends React.Component {
  constructor(props){
    super(props);
  }

  totalDuration(){
    let totalDurationHrs = 0;
    let totalDurationMins = 0;
    let totalDurationSecs = 0;
    let totalSeconds = 0;

    this.props.workouts.forEach((workout)=>{
      totalDurationHrs += workout.duration_hours;
      totalDurationMins += workout.duration_minutes;
      totalDurationSecs += workout.duration_seconds;
    });
    totalSeconds = totalDurationHrs * 3600 + totalDurationMins * 60 + totalDurationSecs;
    return moment.utc(totalSeconds*1000).format('H[hrs ]mm[ mins]');
  }

  totalDistance(){
    let totalDistance = 0;
    this.props.workouts.forEach((workout)=>{
      let distance;
      if (workout.distance_unit === 'yards') {
        distance = workout.distance * .000568182;
      } else if (workout.distance_unit === 'meters') {
        distance = workout.distance * .000621371;
      } else if (workout.distance_unit === 'kilometers'){
        distance = workout.distance * .621371;
      } else {
        distance = workout.distance;
      }
      totalDistance += distance;
    });
    return Math.round((totalDistance)*10)/10;
  }

  totalElevation(){
    let elevation = 0;
    this.props.workouts.forEach((workout)=>{
      let el = workout.elevation;
      if (workout.elevation_unit === 'meters') {
        el *= 3.28084;
      }
      elevation += el;
    });
    return Math.round((elevation)*10) /10;
  }

  averageSpeed(){
    let totalDurationHrs = 0;
    let totalDurationMins = 0;
    let totalDurationSecs = 0;
    let totalSeconds = 0;

    this.props.workouts.forEach((workout)=>{
      totalDurationHrs += workout.duration_hours;
      totalDurationMins += workout.duration_minutes;
      totalDurationSecs += workout.duration_seconds;
    });
    totalSeconds = totalDurationHrs * 3600 + totalDurationMins * 60 + totalDurationSecs;
    let hours = moment.duration(moment.utc(totalSeconds*1000).format('HH:mm:SS')).asHours();
    return Math.round((this.totalDistance() / hours)*10) / 10;

  }

  render () {
    return (
      <div className="stat-totals">
        <header><h2>Workout Totals</h2></header>
        <div className="top-row">
        <div className="stat"><h1>{this.totalDistance()}mi</h1><p>Total Distance</p></div>
        <div className="stat"><h1>{this.totalElevation()}ft</h1><p>Total Elevation</p></div>
        <div className="stat"><h1>{this.averageSpeed()}mph</h1><p>Average Speed</p></div>
        </div>
        <div className="align-div">
          <div className="stat second-row"><h1>{this.totalDuration()}</h1><p className="total-time">Total Time</p></div>
        </div>
      </div>
    );

  }
}

export default WorkoutStats;
