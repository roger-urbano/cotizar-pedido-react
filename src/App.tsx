import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from './components/header/header';
import Login from './pages/Login';
import UserInformation from './pages/UserInformation';
import ChooseProtection from './pages/ChooseProtection';
import Thankyou from './pages/Thankyou';

function App() {
  
  return (
    <Router>
      <div className="grid--container-full login px-0">
        <div className="grid--row grid--row-full justify-content-between">
          <Header/>
      
          <div className="grid--col">
            <Switch>
              <div className="d-flex justify-content-end bg-white wrap--forms">
                <Route exact path="/">
                  <Redirect to="/login" />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/information">
                    <UserInformation />
                </Route>
                <Route exact path="/protection">
                    <ChooseProtection />
                </Route>
                <Route exact path="/thankyou">
                    <Thankyou />
                </Route>
              </div>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
