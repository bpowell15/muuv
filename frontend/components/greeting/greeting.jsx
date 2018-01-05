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
    this.profilePicture = this.profilePicture.bind(this);
  }

  toggleModal(){
  this.setState({
    isOpen: !this.state.isOpen
  });
}

title() {

  if (this.props.location.pathname === '/login' || this.props.currentUser) {
    return <Link to="/" className="header-link"><h1>muuv</h1></Link>;
     }
}


  profilePicture () {
  //   if (this.props.currentuser.picture) {
  //     return (
  //       <img src={this.props.currentUser.picture}></img>
  //     );
  // } else {
    return (<a className="prof-pic"></a>);
  // }
}






  personalGreeting(currentUser, logout){

    return(
    	<hgroup className="header-group">
        <div className="dropdown">
          <div className="sprites dropdown"><h2 className="dropbtn">{this.profilePicture()}</h2><img className='dropdown-sprite' src="#"></img></div>
          <div className="dropdown-content">
            <button className="header-button" onClick={logout}>Log Out</button>
          </div>
        </div>
    	</hgroup>
    );
  }

  render(){
    let sessionLink;
    if (this.props.currentUser) {
      sessionLink = this.personalGreeting(this.props.currentUser, this.props.logout);
    } else if ( this.props.location.pathname === '/login' ) {
      sessionLink = (
        <div>
          <nav className="login-signup">
            <a onClick={this.toggleModal}>Sign up</a>
          </nav>

        </div>
      );
    } else {
    sessionLink= (
        <div className="session-nav">
          <h3>Here to join?</h3>
          <div >
            <nav className="signup-root">
              <a onClick={this.toggleModal}>Sign Up</a>
            </nav>
            <nav className="login-root">
              <Link to="/login">Log In</Link>
            </nav>
          </div>
        </div>

    );
  }
    return (
      <div>
        {sessionLink}
        <SessionModalContainer show={this.state.isOpen} onClose={this.toggleModal} />

      </div>
      // this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()

    );
  }
}


export default Greeting;
