import React from 'react';


class SessionModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showPassword: "password"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showHidePassword = this.showHidePassword.bind(this);
    this.update = this.update.bind(this);
  }

  renderEmailErrors() {

    if ((this.state.email.includes('@') &&
  this.state.email.includes('.'))) {
    return "";
  }

    if (this.props.errors.length > 0 &&
      this.state.email.length > 0 &&(
      !this.state.email.includes('@') ||
      !this.state.email.includes('.'))
    ) {
      return (<p className="email-error">
        Sorry, the email you entered is invalid
      </p>
    );
  } else if ( this.props.errors.length > 0
          && this.state.email.length !== 0
      ) {
      return (
            <p className="email-error">This email address is already taken</p>
          );
        } else if (this.props.errors.length > 0 && this.state.email === "") {
          return (
            <p className="email-error">Enter an email</p>
          );
        } else {
        return "";
      }
    }


  showHidePassword(){
    if ( this.state.showPassword === "text" ) {
      this.setState({showPassword: "password"});
    } else {
      this.setState({showPassword: "text"});
    }
  }

  // Email is invalid", "Password is too short (minimum is 5 characters)"]




  renderPasswordErrors(){
    if ( this.props.errors.length > 0 &&
        this.state.password.length < 5 &&
        this.state.password.length > 0
      ) {
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
      (this.props.errors[0] !== "Password is too short (minimum is 5 characters)"
      && this.props.errors.length !== 0 ))  {
      return "-email";
    }
    return "";
  }

  togglePasswordErrors(){
    if ( this.props.errors.length === 2 ||
      this.props.errors[0] === "Password is too short (minimum is 5 characters)"
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
        password: '',
        showPassword: "password"
      });
    });
  }


  handleClose () {
    this.props.onClose();
    this.setState({
      email: '',
      password: '',
      showPassword: "password"
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
                      <label className="password-show-hide">New Password<div onClick={this.showHidePassword}>
                        <a className={`${this.state.showPassword === "password" ? "show" : "hide"}-sprite`}></a>
                        <a className={this.state.showPassword}>
                          {(this.state.showPassword === "password" ? "Show" : "Hide")}</a>
                        </div>
                      </label>
                        <input type={this.state.showPassword}
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
