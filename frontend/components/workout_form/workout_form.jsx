import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      durationHours: 0,
      durationMinutes: 0,
      durationSeconds: 0,
      elevation: 0,
      sport: 'Ride',
      date: "",
      time: "",
      title: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const workout = this.state;
    this.props.processForm({workout});
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    return (
    <div className="page-container">
      <h1>Manual Entry</h1>
      <form id="new-activity" className="create-workout-form" onSubmit={this.handleSubmit}>

        <div className="row">

          <div className="distance-input">
            <label className="input-label">Distance</label><br></br>
            <div className="distance">
              <input type="number" max='9999' min='0.01' onChange={this.update('distance')} value={this.props.distance} />
              <Dropdown className="unit-dropdown" options={['kilometers', 'meters', 'miles', 'yards']} onChange={this._onSelect} value={this.props.sport} placeholder="miles" />
              </div>
          </div>

          <div className="duration-input">
            <label className="input-label">Duration</label><br></br>
            <div className="distance">
              <input type="number" max='9999' min='0'className="hour-input" onChange={this.update('durationHours')} value={this.props.durationHours} placeholder="hr"  />
              <input type="number" max='59' min='0' className="minute-input" onChange={this.update('durationMinutes')} value={this.props.durationMinutes} placeholder="m" />
              <input type="number" max='59' min='0' className="second-input" onChange={this.update('durationSeconds')} value={this.props.durationHours} placeholder="s" />
            </div>
          </div>
            <div className="elevation-input">
              <label className="input-label">Elevation</label><br></br>
                <div className="distance">
                <input type="number" max='99999' min='0.01' onChange={this.update('elevation')} value={this.props.elevation} />
                <Dropdown className="unit-dropdown" options={['meters', 'feet']} onChange={this._onSelect} value={this.props.sport} placeholder="feet">&#9660;</Dropdown>
                </div>
          </div>
        </div>

        <div className="input-seperator"></div>

        <div className="row">
          <div className="activity_type">
            <label className="input-label">Sport</label>
            <Dropdown className="sport-dropdown" options={['Ride', 'Run', 'Swim', 'Code']} onChange={this._onSelect} value={this.props.sport} placeholder="Run" />


          </div>
          <div className="date-time">
            <label className="input-label">Date & Time</label><br></br>
              <input className="date-time-input" type="text" onChange={this.update('date')} placeholder="01/01/18" />
              <input className="date-time-input" id="time" type="text" onChange={this.update('time')} placeholder="00:00:00" />

          </div>
        </div>

        <div className="row workout-title">
          <label className="input-label">Title</label>
            <input className="title-input" type="text" onChange={this.update('title')} value={this.props.title} placeholder="Afternoon Ride" />

        </div>

        <div className="input-seperator"></div>

        <div className="description-row">
          <label className="input-label">Description</label>
              <textarea className="workout-description" onChange={this.update('description')} value={this.props.description} placeholder="How did it go? See anything cool?"></textarea>
        </div>

        <div className="input-seperator"></div>

        <div className="row submit-workout">
          <input className="submit-button"type="submit" value="Create" />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
  }
}

export default WorkoutForm;
