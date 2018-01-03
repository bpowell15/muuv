import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
    this.toggleFormTitle = this.toggleFormTitle.bind(this);
    this.toggleFormClass = this.toggleFormClass.bind(this);
    this.toggleButtonValue = this.toggleButtonValue.bind(this);
    this.toggleInputLabels = this.toggleInputLabels.bind(this);
    this.toggleInputPlaceholder = this.toggleInputPlaceholder.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
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

  demoSubmit(e) {
    debugger
    e.preventDefault();
    const user = {email: 'demouser@demoemail.com', password: 'password'};
    this.props.processForm(user);
  }

  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  // }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="login-error">
              {error}
            </li>
          ))}
        </ul>
      );
    }
    // return null;
  }

  toggleFormTitle(){
    if (this.props.formType === 'signup') {
      return (
        <div>
        <h1>Sign up for Free</h1>
        <h3>Join now, track your muuvments today!</h3>
        </div>
      );
    } else {
      return (
        <h1>Log In</h1>
      );
    }
  }

  toggleFormClass(){
    if (this.props.formType === 'signup') {
      return (
        'signup'
      );
    } else {
      return (
        'login'
      );
    }
  }

  toggleButtonValue(){
    if (this.props.formType === 'signup') {
      return (
        'Sign Up'
      );
    } else {
      return (
        'Log In'
      );
    }
  }
  toggleInputLabels(label){
    if (this.props.formType === 'signup') {

      return (
        label
      );
    } else {
      return (
        ''
      );
    }
  }

  toggleInputPlaceholder(placeholder){
    if (this.props.formType === 'login') {

      return (
        placeholder
      );
    } else {
      return (
        ''
      );
    }
  }



  render() {
    return (
      <div className={`${this.toggleFormClass()}-form-container`}>
        <form onSubmit={this.handleSubmit} className={`${this.toggleFormClass()}-form-box`}>
          <div className={`${this.toggleFormClass()}-form-title`}>{this.toggleFormTitle()}</div>
          <br/>
          {this.renderErrors()}
          <div className={`${this.toggleFormClass()}-form`}>
            <br/>
            <label>{this.toggleInputLabels('Email')}</label>
              <input type="text"
                value={this.state.email}
                placeholder= {`${this.toggleInputPlaceholder('Your Email')}`}
                onChange={this.update('email')}
                className={`${this.toggleFormClass()}-input`}
              />
            <br/>
            <label>{this.toggleInputLabels('New Password')}</label>
              <input type="password"
                placeholder={`${this.toggleInputPlaceholder('Password')}`}
                value={this.state.password}
                onChange={this.update('password')}
                className={`${this.toggleFormClass()}-input`}
              />

            <br/>
            <input type="submit" value={`${this.toggleButtonValue()}`} className={`${this.toggleFormClass()}-submit-button`} />
            <span className={`${this.toggleFormClass()}-border-top-line`}></span>
          </div>
        </form>
        <button onClick={this.demoSubmit}>Demo login?</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
