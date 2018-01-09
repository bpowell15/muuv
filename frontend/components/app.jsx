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
import Map from './map/map';
import SplashGreetingContainer from './greeting/splash_greeting_container';
import SessionModalContainer from './session_form/session_modal_container';
import HookGreetingContainer from './greeting/hook_greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import WorkoutIndexContainer from './workouts/workout_index_container';
import WorkoutCreateForm from './workout_form/workout_form_container';
// import BackgroundImage from './background_image';

import { AuthRoute, ProtectedRoute } from '../api_util/route_util';


class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){


    return (
        <div>

            <GreetingContainer  />

          <main className="main-page">
            <div>
            </div>
            <HookGreetingContainer />
            <Switch>
              <AuthRoute path="/login" component={SessionFormContainer} />
              <AuthRoute path="/signup" component={SessionFormContainer} />
              <ProtectedRoute path="/workouts/new"
                component={WorkoutCreateForm}/>
              <ProtectedRoute path="/workouts" component={WorkoutIndexContainer} />
              <Route exact path="/routes/new" component={Map} />
            </Switch>
          </main>
        </div>
  );}
}



export default App;


// <Switch>
//   <Route path="/" component={BackgroundImage} image="background-login2" />
//   <Route path="/login" component={BackgroundImage} />
//   <Route path="/signup" component={BackgroundImage} />
// </Switch>
//
