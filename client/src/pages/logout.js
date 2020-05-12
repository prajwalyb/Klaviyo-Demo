import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class logout extends Component {
    constructor(props) {
        super(props)
    
        localStorage.removeItem("usertoken");
        console.log('logout me hai')
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
