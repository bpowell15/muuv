import React from 'react';
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




    return (

      <div className="backdrop animate-opacity" >
              <div className="modal" >
                {this.props.children}
                <div className="signup-modal form-animate-opacity">

                      <div className='signup-form-container'>
                        <form onSubmit={this.handleSubmit} className='signup-form-box'>
                          <button onClick= {this.props.onClose} className='modal-close'></button>
                          <div className='signup-form-title'>Sign Up</div>
                          <p className='signup-description'>Join today to start tracking your muuvments.</p>
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
