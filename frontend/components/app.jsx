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
import SessionModalContainer from './session_form/session_modal_container';
import HookGreetingContainer from './greeting/hook_greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import WorkoutCreateForm from './workout_form/workout_form_container';
import { AuthRoute, ProtectedRoute } from '../api_util/route_util';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){

    return (
        <div>
          <header className="inner-nav-bar">
            <SplashGreetingContainer />
            <GreetingContainer />
          </header>
          <main className="main-page">
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
            <HookGreetingContainer />
            <ProtectedRoute path="/workouts/new"
              component={WorkoutCreateForm} 
            />
          </main>
        </div>
  );}
}



export default App;
