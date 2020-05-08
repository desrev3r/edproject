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
import './index.css';

import UserData from './components/User/Data';
import { Layout } from './components/layout/Layout';
import { View } from './components/layout/View';
import Sidebar from './components/layout/Sidebar';

import { IndexView } from './views/IndexView';
import { AuthView } from './views/AuthView';
import { SignupView } from './views/SignupView';
import { TaskListView } from './views/TaskListView';

import { LogOutView } from './views/LogOutView';
import { AccountView } from './views/AccountView';
import { StatsView } from './views/StatsView';
import { SettingsView } from './views/SettingsView';
import { DashboardView } from './views/Dashboard/IndexView';
import { DashboardTasksView } from './views/Dashboard/TasksView';
import { DashboardAddTaskView } from './views/Dashboard/AddTaskView';
import { DashboardStudentsView } from './views/Dashboard/StudentsView';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <UserData />
      <Layout>
        <Sidebar />
        <View>
          <Switch>
            <Route exact path="/" component={IndexView} />
            <Route path="/login" component={AuthView} />
            <Route path="/signup" component={SignupView} />
            <Route path="/tasks" component={TaskListView} />
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

            {/* DASHBOARD ROUTES */}

            <PrivateRoute
              exact
              path="/dashboard"
              roles={Role.Admin}
              component={DashboardView}
            />

            <PrivateRoute
              exact
              path="/dashboard/students"
              roles={Role.Admin}
              component={DashboardStudentsView}
            />

            <PrivateRoute
              exact
              path="/dashboard/tasks"
              roles={Role.Admin}
              component={DashboardTasksView}
            />

            <PrivateRoute
              path="/dashboard/tasks/add"
              roles={Role.Admin}
              component={DashboardAddTaskView}
            />
          </Switch>
        </View>
      </Layout>
    </Router>
  );
};

export default App;
