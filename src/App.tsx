/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Create from './components/createAccount/Create';
import Dashboard from './components/dashboard/Dashboard';
import { AuthContextProvider } from './contexts/auth';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthContextProvider>
          <Route exact path="/" component={Login} />
          <Route exact path="/create/account" component={Create} />
          <Route exact path="/dashboard/" component={Dashboard} />
        </AuthContextProvider>
      </Switch>
    </div>
  );
}

export default App;
