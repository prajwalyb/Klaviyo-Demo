import React from 'react';
import { Switch , Route } from "react-router-dom";
import { Provider } from "react-redux";

import Dashboard from './pages/dashboard.js';
import Flow from './pages/flows.js';
import FlowLayout from './pages/flowLayout.js';
import Email from './pages/email.js';
import EmailTemplate from './pages/emailLayout.js';
import Register from './components/userRegister.js';
import Login from './components/userLogin.js';
import Logout from './pages/logout.js';
import ProtectedRoute from './pages/protectedRoute.js';
import store from './store.js';
import { loadUser } from './actions/authActions.js';

class App extends React.Component {
  
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
    <Provider store={store}>      
      <Switch>    
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>        
        <ProtectedRoute exact path="/" component={Dashboard} />
        <ProtectedRoute exact path="/logout" component={Logout} />
        <ProtectedRoute exact path="/flow" component={Flow} />
        <ProtectedRoute exact path="/flow/create" component={FlowLayout} />
        <ProtectedRoute exact path="/email-templates" component={Email} />
        <ProtectedRoute exact path="/email-templates/create" component={EmailTemplate} />    
      </Switch>
    </Provider>
  );  
  }
}

export default App;
