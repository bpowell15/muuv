import React from 'react';
import { Link } from 'react-router-dom';

// AIzaSyCpH4W3mkfdGjKh3Ij2-oJiA_y88EhRxRc   maps api

class NavBar extends React.Component {
  constructor(props){
    super(props);
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

  render () {
    return (
      <div className="logged-in-navbar" >
        <div className="left-links" >
          <Link to="/workouts" className="header-link">muuv</Link>
        <div className="logged-in-dropdown">
            <h2 className="dropbtn">Dashboard<img className='dropdown-sprite' src="#"></img></h2>
          <div className="dropdown-content">
            <Link to="/workouts" className="dashboard-button">
              Activity Feed
            </Link>
            <Link to="/routes" className="dashboard-button">
              Routes
            </Link>
          </div>
        </div>
      </div>
      <div className="right-links">
      <div className="user-dropdown">
        <div className="sprites dropdown pic">
          <h2 className="dropbtn">{this.profilePicture()}</h2>
          <img className='dropdown-sprite' src="#"></img>
        </div>
        <div className="user-dropdown-content">
          <a className="header-button" onClick={this.props.logout}>Log Out</a>
        </div>
      </div>
      <div className="create-dropdown">
        <div className="sprites dropdown create">
          <div className='create-sprite'></div>
        </div>
        <div className="create-dropdown-content">
          <Link to="/workouts/new" className="header-button create-route-sprite">Create Workout</Link>
          <Link to="/routes/new" className="header-button">Create Route</Link>
        </div>
      </div>
      </div>


    </div>
  );
  }
}

export default NavBar;
