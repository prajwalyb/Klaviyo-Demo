import React from 'react';
import { Switch , Route , Link } from "react-router-dom";

import Dashboard from './pages/dashboard.js';
import Flow from './pages/flows.js';
import Email from './pages/email.js';
import EmailTemplate from './pages/emailLayout.js';

function App() {
  return (
    <Switch>
      <Route path="/React-DND-Flowchart" exact>
        <Dashboard/>
      </Route>
      <Route path="/React-DND-Flowchart/flow" exact>
        <Flow />
      </Route>
      <Route path="/React-DND-Flowchart/email-templates" exact>
        <Email />
      </Route>
      <Route path="/React-DND-Flowchart/email-templates/create" exact>
        <EmailTemplate/>
      </Route>
    </Switch>
  );
}

export default App;
