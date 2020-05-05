import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';

import { Layout } from './components/layout/layout';
import { View } from './components/layout/view';
import { Sidebar } from './components/layout/sidebar';

import { AuthView } from './views/authView';
import { SignupView } from './views/signupView';
import { AccountView } from './views/accountView';

const App = () => {
  const history = createBrowserHistory();

  const token = localStorage.getItem('token');
  //alert(token)

  return (
    <Router history={history}>
      <Layout>
        <Sidebar />
        <View>
          <Switch>
            <Route exact path="/">
              #IndexPage
            </Route>
            <Route path="/auth" component={AuthView}/>
            <Route path="/signup" component={SignupView} />
            <Route path="/account" component={AccountView} />
          </Switch>
        </View>
      </Layout>
    </Router>
  );
};

export default App;
