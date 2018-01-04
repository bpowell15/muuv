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

    // this.toggleInputPlaceholder = this.toggleInputPlaceholder.bind(this);
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
    const demoUser = {user: {email: 'demouser@demoemail.com', password: 'password'}};
    this.props.processForm(demoUser);
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


  // toggleInputPlaceholder(placeholder){
  //   if (this.props.formType === 'login') {
  //
  //     return (
  //       placeholder
  //     );
  //   } else {
  //     return (
  //       ''
  //     );
  //   }
  // }



  render() {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <div className='login-form-title'>Log In</div>
          <br/>
          {this.renderErrors()}
          <div className='login-form'>
            <br/>
            <label></label>
              <input type="text"
                value={this.state.email}
                placeholder= 'Your Email'
                onChange={this.update('email')}
                className='login-input'
              />
            <br/>
            <label></label>
              <input type="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
              />

            <br/>
            <input type="submit" value="Log In" className='login-submit-button' />
            <span className='login-border-top-line'></span>
            <button className="demo-button" onClick={this.demoSubmit}>Demo login?</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
