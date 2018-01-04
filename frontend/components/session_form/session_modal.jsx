import React from 'react';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../../api_util/route_util';
import {Route} from 'react-router-dom';


class SessionModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="signup-error">
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  render() {

    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }


    const backdropStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 5000
    };



    return (
      <div className="backdrop" style={this.backdropStyle}>
              <div className="modal" style={this.modalStyle}>
                {this.props.children}
                <div className="signup-modal">

                      <div className='signup-form-container'>
                        <form onSubmit={this.handleSubmit} className='signup-form-box'>
                          <a onClick= {this.props.onClose} className='modal-close' href="#"></a>
                          <div className='signup-form-title'>Sign Up</div>
                          <br/>
                          {this.renderErrors()}
                          <div className='signup-form'>
                            <br/>
                            <label>Email</label>
                              <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className='signup-input'
                              />
                            <br/>
                            <label>New Password</label>
                              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className='signup-input'
                              />

                            <br/>
                            <input type="submit" value="Sign Up" className='signup-submit-button' />
                          </div>
                        </form>
                      </div>

                </div>
              </div>
            </div>
    );
  }
}

// removeed on submit for listener, if things go wrong add again.

export default SessionModal;
