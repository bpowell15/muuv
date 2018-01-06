import React from 'react';


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


  componentWillMount(){
    this.props.clearErrors();
  }

  renderEmailErrors() {


    if (this.props.errors.length === 0 || this.props.errors[0] === "Password is too short (minimum is 5 characters)") {
      return null;
    }


    if (this.state.email.length !== 0 ) {
      return (
        <p className="email-error">This email address is already taken</p>
      );
    }
    if (this.state.email === "") {
      return (
        <p className="email-error">Enter an email</p>
      );
    }
}




  renderPasswordErrors(){
    if (this.props.errors.length === 0 || this.props.errors[0] !== "Password is too short (minimum is 5 characters)")  {
      return null;
    }

    if (this.state.password.length < 5) {
      return (<p className="password-error">
      Your password must be at least 5 characters long</p>
      );
    } else {
      return (
        <p className="password-error">Enter a password</p>
      );
    }
  }


  toggleEmailErrors(){
    if (this.props.errors.length === 0 || this.props.errors[0] === "Password is too short (minimum is 5 characters)" ) {
      return "";
    }

    if (this.renderEmailErrors()) {
      return "-email";
    }
  }

  togglePasswordErrors(){
    if (this.props.errors.length === 0 ||
      this.props.errors[0] !== "Password is too short (minimum is 5 characters)"
    ) {
      return "";
    }

    if (this.renderPasswordErrors()) {
      return "-password";
    }
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
      this.setState()
    });
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
                    <a onClick= {this.props.onClose} className='modal-close'></a>
                    <div className='signup-form-title'>Sign Up</div>
                    <p className='signup-description'>Cyclist? Runner? Join the muuvment today.</p>
                    <br/>
                    <div className='signup-form'>
                      <br/>
                      <label>Email</label>
                        <input type="text"
                          value={this.state.email}
                          onChange={this.update('email')}
                          className={`signup-input${this.toggleEmailErrors()}`}
                        />
                      {this.renderEmailErrors()}
                      <br/>
                      <label>New Password</label>
                        <input type="password"
                          value={this.state.password}
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
