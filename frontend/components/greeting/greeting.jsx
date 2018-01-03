import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <div className="dropdown">
      <h2 className="dropbtn">{currentUser.email.charAt(0).toUpperCase()}</h2>
      <div className="dropdown-content">
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </div>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
