
import React from 'react';


class HookGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.hook = this.hook.bind(this);
  }

  hook() {
  if (this.props.location.pathname === '/' && this.props.currentUser === null) {
    return (
      <div>
        <h1 className="splash-title">muuv</h1>
        <p className="splash-hook">Track the way you muuv.</p>
      </div>
      );
    }
  }


  render () {
    return (
      <div>{this.hook()}</div>
    );
  }
}

export default HookGreeting;
