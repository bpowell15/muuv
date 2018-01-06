import React from 'react';


class SessionModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.update = this.update.bind(this);
  }

  renderEmailErrors() {
    if ( this.props.errors.length === 2 ) {
      if (this.state.email.length !== 0 ) {
        return (
          <p className="email-error">This email address is already taken</p>
        );
      } else if (this.state.email === "") {
        return (
          <p className="email-error">Enter an email</p>
        );
      }
    } else {
      return null;
    }
  }

  // Email is invalid", "Password is too short (minimum is 5 characters)"]




  renderPasswordErrors(){
    if ( this.props.errors.length > 0 && this.state.password.length < 5 && this.state.password.length > 0 ) {
        return (<p className="password-error">
        Your password must be at least 5 characters long</p>
        );
      } else if ( this.props.errors.length > 0 && this.state.password.length  ===  0 ) {
        return (
          <p className="password-error">Enter a password</p>
        );
      }
      return "";
  }


  toggleEmailErrors(){
    if ( this.props.errors.length === 2  ||
      this.props.errors[0] !== "Password is too short (minimum is 5 characters)"
    && this.props.errors.length !== 0 )  {
      return "-email";
    }
    return "";
  }

  togglePasswordErrors(){

    if ( this.props.errors.length === 2 ||
      this.props.errors[0] == "Password is too short (minimum is 5 characters)"
      || this.renderPasswordErrors() ) {
      return "-password";
    }

    return "";
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user}).then(() => {
      this.props.onClose();
      this.setState({
        email: '',
        password: ''
      });
    });
  }


  handleClose () {
    this.props.onClose();
    this.setState({
      email: '',
      password: ''
    });
    this.props.clearErrors();
  }

  render() {

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
                    <a onClick= {this.handleClose} className='modal-close'></a>
                    <div className='signup-form-title'>Sign Up</div>
                    <p className='signup-description'>Cyclist? Runner? Join the muuvment today.</p>
                    <br/>
                    <div className='signup-form'>
                      <br/>
                      <label>Email</label>
                        <input type="text"
                          value={this.state.email}
                          onClick={this.props.clearErrors}
                          onChange={this.update('email')}
                          className={`signup-input${this.toggleEmailErrors()}`}
                        />
                      {this.renderEmailErrors()}
                      <br/>
                      <label>New Password</label>
                        <input type="password"
                          value={this.state.password}
                          onClick={this.props.clearErrors}
                          onChange={this.update('password')}
                          className={`signup-input${this.togglePasswordErrors()}`}
                        />
                      {this.renderPasswordErrors()}
                      <br/>
                      <input type="submit"
                         value="Sign Up"
                         className='signup-submit-button'>
                       </input>
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
