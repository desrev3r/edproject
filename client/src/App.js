import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PrivateRoute } from './components/PrivateRoute';
import { Role } from './helpers/roles';
import './index.css';

import { Layout } from './components/layout/layout';
import { View } from './components/layout/view';
import { Sidebar } from './components/layout/sidebar';

import { AuthView } from './views/authView';
import { SignupView } from './views/signupView';
import { AccountView } from './views/accountView';
import { DashboardView } from './views/dashboardView';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Layout>
        <Sidebar />
        <View>
          <Switch>
            <Route exact path="/">
              #IndexPage
            </Route>
            <Route path="/login" component={AuthView} />
            <Route path="/signup" component={SignupView} />
            <PrivateRoute path="/account" roles={Role.User} component={AccountView} />
            <PrivateRoute path="/dashboard" roles={Role.Admin} component={DashboardView} />
            
          </Switch>
        </View>
      </Layout>
    </Router>
  );
};

export default App;
