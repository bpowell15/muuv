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
    e.preventDefault();
    const demoUser = {
      user: {
        email: 'demouser@demoemail.com',
        password: 'password'
      }};
    this.props.processForm(demoUser);
  }


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

  toggleFormLabels(label){
    if (this.props.formType === 'signup') {
      if (label === "title") {
        return "Join muuv today, it's Free.";
      } else {
        return "Sign Up";
      }
    }
    return "Log In";
  }



  render() {
    return (
        <form onSubmit={this.handleSubmit} className='login-form-container login-form-box'>
          <div className='login-form-title'>{this.toggleFormLabels("title")}</div>
          <br/>
          {this.renderErrors()}
          <div className='login-form'>
            <br/>
              <input type="text"
                value={this.state.email}
                placeholder= 'Your Email'
                onChange={this.update('email')}
                className='login-input'
              />
            <br/>
              <input type="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
              />
            <br/>
            <input type="submit" value={this.toggleFormLabels()}
              className='login-submit-button'
             />
            <span className='login-border-top-line'></span>
            <button className="demo-button"
              onClick={this.demoSubmit}>
              Demo login?
            </button>
          </div>
        </form>
    );
  }
}

export default withRouter(SessionForm);
