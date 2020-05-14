import React from 'react';
import NavComp from '../components/MainNavbar.js';
import { MainSidebar } from '../components/MainSidebar.js';

class Email extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavComp/>
        <MainSidebar/>
        <div id="main">
            <div className="dashboard-nav-header">
              <div className="container">
                <div className="row">
                <p style={{margin:'0 0 0 -90px'}}>Email Templates</p>
                <a className="btn primaryButton" href="/email-templates/create">Create Template</a>
              </div>
            </div>
            <div className="dashboard-nav-footer"></div>
            </div>  
        </div>
      </React.Fragment>
    );
  }
}

export default Email;
