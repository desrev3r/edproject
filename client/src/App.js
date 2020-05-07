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

import { Layout } from './components/layout/Layout';
import { View } from './components/layout/View';
import { Loader } from './components/generic/Loader';
import Sidebar from './components/layout/Sidebar';

import { IndexView } from './views/IndexView';
import { AuthView } from './views/AuthView';
import { SignupView } from './views/SignupView';
import { LogOutView } from './views/LogOutView';
import { AccountView } from './views/AccountView';
import { StatsView } from './views/StatsView';
import { SettingsView } from './views/SettingsView';
import { DashboardView } from './views/DashboardView';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Layout>
        <Sidebar />
        <View>
          <Switch>
            <Route exact path="/" component={IndexView} />
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
