import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../api_util/route_util';

class App extends React.Component{
  constructor(props) {
    debugger
    super(props);
  }

  // shuffleBackground() {
  //   const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
  //   const backgroundArray = ['background-login', 'background-login2', 'background-login3', 'background-login4', 'background-login5' ];
  //   return shuffleArray(backgroundArray)[0];
  // }

  title() {
    if (this.props.location.pathname === '/login' || this.props.store.getState().session.currentUser) {
      return <Link to="/" className="header-link"><h1>muuv</h1></Link>;
       }
  }

  hook() {
    if (this.props.location.pathname === '/' && this.props.store.getState().session.currentUser === null) {
      return (
        <div>
          <h1 className="splash-title">muuv</h1>
          <p className="splash-hook">Connecting athletes,
            tracking stats.</p>
        </div>
        );
    }
  }



  render(){
    return (

        <div>
          <div className="nav-bar">
          <header className="inner-nav-bar">
              {this.title()}
            <GreetingContainer />
          </header>
          </div>
          <main className="main-page">
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
            {this.hook()}
          </main>
        </div>

  );}
}



export default withRouter(App);
