import React from 'react';

const DashboardNav = () =>{
    return(
        <React.Fragment>
            <div className="dashboard-nav-header">
                <p>Dashboard</p>
            </div>            
            <div className="dashboard-nav-footer">
                <div className="dashboard-nav-footer-component">Objectives</div>
                <div className="dashboard-nav-footer-component">Performance</div>
                <div className="dashboard-nav-footer-component">Analytics</div>
                <div className="dashboard-nav-footer-component">Lists and Analytics</div>
                <div className="dashboard-nav-footer-component">Adtivity Feed</div>
            </div>
        </React.Fragment>
    )
}
export default  DashboardNav;