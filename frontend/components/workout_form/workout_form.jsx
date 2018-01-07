import React from 'react';
import { Link } from 'react-router-dom';

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
    <form id="new-activity" className="create-workout-form" onClick={this.handleSubmit}>

      <div className="row">
        <div className="distance-input">
          <label className="input-label">Distance
            <input type="number" max='9999' min='0.01' onChange={this.update('distance')} value={this.props.distance} />
          </label>
          <div className="unitDropDown">miles</div>
        </div>
        <div className="duration-input">
          <label className="input-label">Duration
            <input type="number" max='9999' min='0' onChange={this.update('durationHours')} value={this.props.durationHours} placeholder="hr"  />
            <input type="number" max='59' min='0' onChange={this.update('durationMinutes')} value={this.props.durationMinutes} placeholder="m" />
            <input type="number" max='59' min='0' onChange={this.update('durationSeconds')} value={this.props.durationHours} placeholder="s" />
          </label>
        </div>
          <div className="elevation-input">
            <label className="input-label">ft
              <input type="number" max='99999' min='0.01' onChange={this.update('elevation')} value={this.props.elevation} />
            </label>
        </div>
      </div>

      <div className="row">
        <div className="activity_type">
          <label className="input-label">
            <input type="submit" id="activity_type" value={this.props.sport} />
            <ul className="options">
              <li value="Ride">Ride</li>
              <li value="Run">Run</li>
              <li value="Swim">Swim</li>
              <li value="Code">Code</li>
            </ul>
          </label>
        </div>
        <div className="date-time">
          <label>Date & Time
            <input type="date" onChange={this.update('date')} value={this.props.date} placeholder="01/01/18" />
            <input type="time" onChange={this.update('time')} value={this.props.time} placeholder="01/01/18" />
          </label>
        </div>
      </div>

      <div className="row workout-title">
        <label className="input-label">Title
          <input type="text" onChange={this.update('title')} value={this.props.title} placeholder="Afternoon Ride" />
        </label>
      </div>

      <div className="row">
        <label className="input-label">Description
            <textarea onChange={this.update('description')} value={this.props.description} placeholder="How did it go? See anything cool?"></textarea>
        </label>
      </div>

      <div className="row submit-workout">
        <input type="submit" value="Create" />
        <Link to="/">Cancel</Link>
      </div>
    </form>
  );
  }
}

export default WorkoutForm;
