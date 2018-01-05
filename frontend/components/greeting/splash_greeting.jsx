import React from 'react';
import {Link} from 'react-router-dom';

class SplashGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.title.bind(this);

  }

  title() {
    if (this.props.location.pathname === '/login' || this.props.location.pathname === '/signup' || this.props.currentUser) {
      return <Link to="/" className="header-link"><h1>muuv</h1></Link>;
    }
  }

  render () {
    return (
      <div>
        {this.title()}
      </div>
    );
  }
}
export default SplashGreeting;
