import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import AccActivate from './containers/AccActivate';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm  from './containers/ResetPasswordConfirm';
import Layout from './hocs/Layout';
import AccView from './containers/AccView';
import { Provider } from 'react-redux';
import store from './store';


const App = () => (
  <Provider store = {store} >
    <Router>
      <Layout>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/login' component = {Login}/>
          <Route exact path = '/signup' component = {Signup}/>
          <Route exact path = '/reset-password' component = {ResetPassword}/>
          <Route exact path = '/password/reset/confirm/:uid/:token' component = {ResetPasswordConfirm}/>
          <Route exact path = '/activate/:uid/:token' component = {AccActivate}/>
          <Route exact path = '/account' component = {AccView}/>
        </Switch>
      </Layout>    
    </Router>
  </Provider>
  
)

export default App;