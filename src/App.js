import React from 'react';
import { Switch , Route , Link } from "react-router-dom";
import Dashboard from './pages/dashboard.js';
import Flow from './pages/flows.js';

function App() {
  return (
    <Switch>
      <Route path="/React-DND-Flowchart" exact>
        <Dashboard/>
      </Route>
      <Route path="/React-DND-Flowchart/flow">
        <Flow />
      </Route>
    </Switch>
  );
}

export default App;
