import React from 'react';
import moment from 'moment';

class WorkoutStats extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ride: [],
      run: [],
      currentStats: this.props.workouts,
      highlight: "all"
    };
    // this.totalDuration = this.totalDuration.bind(this);
    // this.totalDistance = this.totalDistance.bind(this);
    // this.totalElevation = this.totalElevation.bind(this);
    // this.averageSpeed = this.averageSpeed.bind(this);
    this.statSwitch = this.statSwitch.bind(this);
  }

  totalDuration(workouts){
    let totalDurationHrs = 0;
    let totalDurationMins = 0;
    let totalDurationSecs = 0;
    let totalSeconds;

    workouts.forEach((workout)=>{
      totalDurationHrs += workout.duration_hours;
      totalDurationMins += workout.duration_minutes;
      totalDurationSecs += workout.duration_seconds;
    });


    totalSeconds = totalDurationHrs * 3600 + totalDurationMins * 60 + totalDurationSecs;


    var numdays = Math.floor(totalSeconds / 86400);

    var numhours = Math.floor((totalSeconds % 86400) / 3600);

    var numminutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);

    var numseconds = ((totalSeconds % 86400) % 3600) % 60;

    return <div className="stat second-row"><h1>{numdays}</h1>days <h1>{numhours}</h1>hrs <h1>{numminutes}</h1>mins <h1>{numseconds}</h1>secs </div>;
  }

  componentDidMount (){
    let run = [];
    let ride = [];
    for (let i = 0; i < this.props.workouts.length; i++) {
      if (this.props.workouts[i].sport === 'Run') {
        run.push(this.props.workouts[i]);
      } else if (this.props.workouts[i].sport === 'Ride') {
        ride.push(this.props.workouts[i]);
      }
    }

    this.setState({
      ride: ride,
      run: run
    });

  }

  totalDistance(workouts){
    let totalDistance = 0;
    workouts.forEach((workout)=>{
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

  totalElevation(workouts){
    let elevation = 0;
    workouts.forEach((workout)=>{
      let el = workout.elevation;
      if (workout.elevation_unit === 'meters') {
        el *= 3.28084;
      }
      elevation += el;
    });
    return Math.round((elevation)*10) /10;
  }

  averageSpeed(workouts){
    let totalDurationHrs = 0;
    let totalDurationMins = 0;
    let totalDurationSecs = 0;
    let totalSeconds = 0;

    workouts.forEach((workout)=>{
      totalDurationHrs += workout.duration_hours;
      totalDurationMins += workout.duration_minutes;
      totalDurationSecs += workout.duration_seconds;
    });
    totalSeconds = totalDurationHrs * 3600 + totalDurationMins * 60 + totalDurationSecs;
    let hours = moment.duration(moment.utc(totalSeconds*1000).format('HH:mm:SS')).asHours();
    return Math.round((this.totalDistance(workouts) / hours)*10) / 10;
  }

  statSwitch(workouts, type){
    this.setState({
      currentStats: workouts,
      highlight: type
    });
  }

  render () {
    return (
      <div className="stat-totals">
        <header style={{display: "flex", marginBottom: "10px"}}><h2 className={this.state.highlight === 'all' ? "highlight" : ""} onClick={()=>{this.statSwitch(this.props.workouts, 'all')}}>All Activity</h2>
                <h2 className={this.state.highlight === 'ride' ? "highlight" : ""} style={{marginLeft: "20px"}} onClick={()=>{this.statSwitch(this.state.ride, 'ride')}}>Rides</h2>
                <h2 className={this.state.highlight === 'run' ? "highlight" : ""} style={{marginLeft: "20px"}} onClick={()=>{this.statSwitch(this.state.run, 'run')}}>Runs</h2>
                <h2 style={{marginLeft: "40px", fontWeight:"300"}}><span>Entries: </span>{this.state.currentStats.length}</h2>
        </header>
        <div className="top-row">
        <div><div className="stat"><h1>{this.totalDistance(this.state.currentStats)}</h1>mi</div><p>Total Distance</p></div>
        <div><div className="stat"><h1>{this.totalElevation(this.state.currentStats)}</h1>ft</div><p>Total Elevation</p></div>
        <div><div className="stat"><h1>{this.averageSpeed(this.state.currentStats)}</h1>mph</div><p>Average Speed</p></div>
        </div>
        <div className="align-div">
          <div className="stat third-row">{this.totalDuration(this.state.currentStats)}<p className="total-time">Total Time</p></div>
        </div>
      </div>
    );

  }
}

export default WorkoutStats;
