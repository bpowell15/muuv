import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SessionModalContainer from '../session_form/session_modal_container';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(){
  this.setState({
    isOpen: !this.state.isOpen
  });
}



  profilePicture () {
  //   if (this.props.currentuser.picture) {
  //     return (
  //       <img src={this.props.currentUser.picture}></img>
  //     );
  // } else {
    return (<a className="prof-pic"></a>);
  // }
  // when implementing, put current user variable back in callback def and call
}

sessionLinks(){
  if (this.props.currentUser) {
    return this.currentUserLinks(this.props.logout);
  } else if ( this.props.location.pathname === '/login' ) {
    return  (
      <button className="login-signup"
        onClick={this.toggleModal}>Sign up
      </button>
    );
  } else if (this.props.location.pathname === '/signup') {
    return (
      <Link to="/login" className="login-signup">Log In</Link>
    );
  }
  else {
    return(
      <div className="session-nav">
        <h3>Here to join?</h3>
        <button className="signup-root"
          onClick={this.toggleModal}>Sign Up
        </button>
        <div className="splash-login">
            <Link to="/login" className="login-root">Log In</Link>
        </div>
      </div>
    );
  }
}

classToggle(){
  if (this.props.location.pathname === '/') {
    if (this.props.currentUser === null) {
      return '-splash';
    }
  }
  return '';
}


  currentUserLinks(logout){
    return(

        <div className="dropdown">
          <div className="sprites dropdown">
            <h2 className="dropbtn">{this.profilePicture()}</h2>
            <img className='dropdown-sprite' src="#"></img>
          </div>
          <div className="dropdown-content">
            <button className="header-button"
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
    );
  }

  render(){
    return (
      <div className={`nav-bar${this.classToggle()}`}>
        {this.sessionLinks()}
        <SessionModalContainer
          show={this.state.isOpen} onClose={this.toggleModal}
        />
      </div>
    );
  }
}


export default Greeting;
