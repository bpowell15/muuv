import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../api_util/route_util';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }


  render(){
    return (
      <div>
        <div className="nav-bar">
        <header className="inner-nav-bar">
          <Link to="/" className="header-link">
            <h1>muuv</h1>
          </Link>
          <GreetingContainer />
        </header>
        </div>
        <main className="main-page">
          <AuthRoute path="/login" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
        </main>
      </div>
  );}
}



export default App;
