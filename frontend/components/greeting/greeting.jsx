import React from 'react';
import { Link } from 'react-router-dom';
import SessionModalContainer from '../session_form/session_modal_container';




class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
    this.sessionLinks = this.sessionLinks.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(){
  this.setState({
    isOpen: !this.state.isOpen
  });
}

  sessionLinks (){
    return (
      <nav className="login-signup">
        <Link to="/login">Login</Link>
        <Link to="/signup" onClick={this.toggleModal}>Sign up</Link>
        <SessionModalContainer show={this.state.isOpen} onClose={this.toggleModal} />
      </nav>
    );
  }

  personalGreeting(currentUser, logout){
    return(
    	<hgroup className="header-group">
        <div className="dropdown">
          <h2 className="dropbtn">{currentUser.email.charAt(0).toUpperCase()}</h2>
          <div className="dropdown-content">
            <button className="header-button" onClick={logout}>Log Out</button>
          </div>
        </div>
    	</hgroup>
    );
  }
  render(){
    return (
      this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()
    );
  }
}


export default Greeting;
