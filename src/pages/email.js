import React from 'react';
import NavComp from '../components/MainNavbar.js';
import { MainSidebar } from '../components/MainSidebar.js';
import { NavLink } from 'react-router-dom';

class Email extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavComp/>
        <MainSidebar/>
        <div id="main">
            <div className="dashboard-nav-header">
                <p>Email Templates</p>
                <a className="btn btn-primary" href="/email-templates/create">Create Template</a>
                <div className="dashboard-nav-footer"></div>
            </div>  
        </div>
      </React.Fragment>
    );
  }
}

export default Email;
