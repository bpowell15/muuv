import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import merge from 'lodash/merge';

class WorkoutEdit extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      title: this.props.workout.title,
      description: this.props.workout.description,
      sport: this.props.workout.sport
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  parseDate(){
    return moment(this.props.workout.date).format('MMMM Do YYYY');
  }
  duration(){
    let secs;
    let mins;
    let hrs = this.props.workout.duration_hours;

    if (this.props.workout.duration_seconds < 10) {
      secs = `0${this.props.workout.duration_seconds}`;
    } else {
      secs = `${this.props.workout.duration_seconds}`;
    }

    if (this.props.workout.duration_minutes < 10) {
      mins = `0${this.props.workout.duration_minutes}`;
    } else {
      mins = `${this.props.workout.duration_minutes}`;
    }

    if (hrs === 0) {
      return(
        `${mins}:${secs}`
      );
    } else {
      return (
      `${hrs}:${mins}:${secs}`
    );
    }
  }

  handleUpdate(e){

    e.preventDefault();
    const workout = merge({}, this.props.workout, this.state);
    this.props.processForm(workout).then((workout) => {
      this.props.toggleEdit();
      this.props.history.push(`/workouts/${this.props.workout.id}`);
      this.props.clearErrors();
      }
    );
  }

  handleClose(){
    this.props.toggleEdit();
  }

  update(field) {
    return(
      e => {
        return (
          this.setState({
            [field]: e.currentTarget.value
          })
        );
      }
    );
  }
  render () {
    return (
      <div className="modal-backdrop">

    <div className="edit-modal">
        <a onClick= {this.handleClose} className='modal-close edit'></a>
      <form id="new-activity" className="edit-workout-form" onSubmit={this.handleUpdate}>
      <div className="edit-header">
        <h1>Edit Activity</h1>
        <input className="submit-button"type="submit" value="Save & View Activity" />
      </div>

        <div className="edit-row-one">
          <div className="edit-workout-title">
            <label className="edit-input-label">Title</label>
            <input className="edit-title-input" type="text" onChange={this.update('title')} value={this.state.title} placeholder="Afternoon Ride" />
          </div>
          <div className="activity_type">
            <label className="edit-input-label sport">Sport</label>
            <select className="select-dropdown edit-sport-select" onChange={this.update('sport')} value={this.state.sport}>
              <option selected value="Ride">Ride</option>
              <option value="Run">Run</option>
              <option value="Swim">Swim</option>
              <option value="Code">Code</option>
            </select>
          </div>
        </div>

        <div className="edit-description-row">
          <div>
            <label className="edit-input-label">Description</label>
            <textarea className="workout-description" onChange={this.update('description')} value={this.state.description} placeholder="How did it go? See anything cool?"></textarea>
          </div>
          <ul>
            <li><h3 className="edit-input-label">Details</h3></li>
              <li>{this.parseDate()}</li>
              <li>{this.props.workout.distance}{this.props.workout.distance_unit}</li>
              <li>{this.duration()}</li>
              <li>{this.props.workout.elevation}{this.props.workout.elevation_unit}</li>
            </ul>
        </div>

      </form>
    </div>
    </div>
  );

  }
}

export default WorkoutEdit;
