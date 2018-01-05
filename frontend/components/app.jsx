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
import SplashGreetingContainer from './greeting/splash_greeting_container';
import HookGreetingContainer from './greeting/hook_greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../api_util/route_util';

class App extends React.Component{
  constructor(props) {

    super(props);
  }

  // shuffleBackground() {
  //   const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
  //   const backgroundArray = ['background-login', 'background-login2', 'background-login3', 'background-login4', 'background-login5' ];
  //   return shuffleArray(backgroundArray)[0];
  // }




  render(){

    return (

        <div>
          <div className="nav-bar">
          <header className="inner-nav-bar">
            <SplashGreetingContainer />
            <GreetingContainer />
          </header>
          </div>
          <main className="main-page">
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
            <HookGreetingContainer />
          </main>
        </div>

  );}
}



export default App;
