import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SessionModalContainer from '../session_form/session_modal_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.clearErrorsOpenModal = this.clearErrorsOpenModal.bind(this);
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

  clearErrorsOpenModal() {
    this.props.clearErrors();
    this.toggleModal();
  }

sessionLinks(){
  if (this.props.currentUser) {
      return <NavBarContainer />;
  } else if ( this.props.location.pathname === '/login' ) {
    return  (
      <header className="inner-nav-bar">
        <Link to="/" className="header-link"><h1>muuv</h1></Link>
        <button className="login-signup"
          onClick={this.clearErrorsOpenModal}>Sign up
        </button>
      </header>
    );
  } else if (this.props.location.pathname === '/signup') {
    return (
      <header className="inner-nav-bar">
        <Link to="/" className="header-link"><h1>muuv</h1></Link>;
        <Link to="/login" className="login-signup">Log In</Link>
      </header>
    );
  }
  else {
    return(
      <div className="session-nav">
        <h3>Here to join?</h3>
        <button className="signup-root"
          onClick={this.clearErrorsOpenModal}>Sign Up
        </button>
            <Link to="/login" className="login-root splash-login"><div className="splash-login-sprite"></div>Log In</Link>
      </div>
    );
  }
}ffj

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
