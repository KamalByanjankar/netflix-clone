import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginForm from './components/LoginForm/LoginForm';
import LoginScreen from './components/LoginScreen/LoginScreen';
import SignupForm from './components/SignupForm/SignupForm';

function App() {
  const user = null

  return (
    <div>
      {
        !user ? (
          <Router>
            <Switch>
              <Route exact path="/">
                <LoginScreen />
              </Route>
              <Route path="/login">
                <LoginForm />              
              </Route>
              <Route path="/signup">
                <SignupForm />
              </Route>
            </Switch>
          </Router>
        ) : (
          <HomeScreen />
        )
      }
    </div>
  );
}

export default App;