import React from 'react';
import { Link } from 'react-router-dom';
import SessionModalContainer from '../session_form/session_modal_container';




class Greeting extends React.Component {
  constructor(props){
    debugger
    super(props);
    this.state = {
      isOpen: false
    };
    this.sessionLinks = this.sessionLinks.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.profilePicture = this.profilePicture.bind(this);
  }

  toggleModal(){
  this.setState({
    isOpen: !this.state.isOpen
  });
}

  sessionLinks (){

    return (
      <div>
        <nav className="login-signup">
          <Link to="/login">Login</Link>
        </nav>
        <nav className="login-signup">
          <a onClick={this.toggleModal}>Sign up</a>
        </nav>
          <SessionModalContainer show={this.state.isOpen} onClose={this.toggleModal} />
      </div>
    );
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
    return (
      this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()
    );
  }
}


export default Greeting;
