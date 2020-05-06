import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PrivateRoute } from './components/PrivateRoute';
import { Role } from './helpers/roles';
import ReactLoading from 'react-loading';
import './index.css';

import { Layout } from './components/layout/layout';
import { View } from './components/layout/view';
import Sidebar from './components/layout/sidebar';

import { AuthView } from './views/authView';
import { SignupView } from './views/signupView';
import { LogOutView } from './views/logOutView';
import { AccountView } from './views/accountView';
import { StatsView } from './views/statsView';
import { SettingsView } from './views/settingsView';
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
              <ReactLoading
                type="spin"
                color="coral"
                height={'50px'}
                width={'50px'}
                delay={300}
              />
            </Route>
            <Route path="/login" component={AuthView} />
            <Route path="/signup" component={SignupView} />
            <PrivateRoute
              path="/logout"
              roles={Role.User}
              component={LogOutView}
            />
            <PrivateRoute
              path="/account"
              roles={Role.User}
              component={AccountView}
            />
            <PrivateRoute
              path="/stats"
              roles={Role.User}
              component={StatsView}
            />
            <PrivateRoute
              path="/settings"
              roles={Role.User}
              component={SettingsView}
            />
            <PrivateRoute
              path="/dashboard"
              roles={Role.Admin}
              component={DashboardView}
            />
          </Switch>
        </View>
      </Layout>
    </Router>
  );
};

export default App;
