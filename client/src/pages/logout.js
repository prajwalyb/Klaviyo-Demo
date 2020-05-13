import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/authActions.js';

export class logout extends Component {
    
    componentDidMount(){
        this.props.logoutUser();
    }
    render() {
        return (
            <div className="container">
            <div className="row">
                <h1>You have been logged out</h1>
            </div>                
            <Link to="/">Log in Again</Link>
            </div>
        )
    }
}

// const mapStatesToProps = state => {

// }

export default connect (null, { logoutUser })(logout);
