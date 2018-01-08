import React from 'react';
import Dropdown from 'react-dropdown';



class NavBar extends React.Component {
  constructor(props){
    super(props);
  }


  render () {
    return (
    <div className="logged-in-nav">
      <div className="left-nav">
        <h1>muuv</h1>
        <Dropdown className="dashboard-drop" options={['Activity Feed', 'Routes']} onChange={this._onSelect} value="" placeholder="Dashboard" />
      </div>
      <div className="right-nav">
        <Dropdown className="user-drop" options={[<a>My Profile</a>, <a>Log Out</a>]} />
        <Dropdown className="create-drop" options={[<a>Add manual entry</a>, <a>Create a Route</a>]} />
      </div>
    </div>
  );
  }
}

export default NavBar ;
