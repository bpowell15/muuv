import React from 'react';
import {Link} from 'react-router-dom';

class SplashGreeting extends React.Component {
  constructor(props) {
    super(props);
  }



  render () {
    if (this.props.location.pathname === '/login' ||
      this.props.location.pathname === '/signup' )
      {
        return <Link to="/" className="header-link"><h1>muuv</h1></Link>;
      }
      return "";
    }
  }
export default SplashGreeting;
