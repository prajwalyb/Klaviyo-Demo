import React from 'react';
import { Switch , Route , Link } from "react-router-dom";

import Dashboard from './pages/dashboard.js';
import Flow from './pages/flows.js';
import FlowLayout from './pages/flowLayout.js';
import Email from './pages/email.js';
import EmailTemplate from './pages/emailLayout.js';


function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard/>
      </Route>
      <Route path="/flow" exact>
        <Flow />
      </Route>
      <Route path="/flow/create" exact>
        <FlowLayout />
      </Route>
      <Route path="/email-templates" exact>
        <Email />
      </Route>
      <Route path="/email-templates/create" exact>
        <EmailTemplate/>
      </Route>
    </Switch>
  );
}

export default App;
