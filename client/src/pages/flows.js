import React from 'react';
import NavComp from '../components/MainNavbar.js';
import { MainSidebar } from '../components/MainSidebar.js';
import { NavLink } from 'react-router-dom';


class Flow extends React.Component {
  render () {
    return (
       <React.Fragment>
        <NavComp/>
        <MainSidebar/>
        <div id="main">
            <div className="dashboard-nav-header">
                <p>Flows</p>
                <a className="btn btn-primary" href="/flow/create">
                  Create Flow
                </a>
                <div className="dashboard-nav-footer"></div>
            </div>  
        </div>
      </React.Fragment>
    )
  }
}

export default Flow;
