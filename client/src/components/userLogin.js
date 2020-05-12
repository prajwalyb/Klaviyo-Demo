import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { API_URL } from '../helpers/utils.js';

export class Login extends Component {
    constructor(props) {
        super(props);
        // const token = localStorage.getItem('usertoken');
        // let loggedIn=true;
        // if(token==null) loggedIn=false;

        this.state = {
            email:"",
            password:""
            // ,
            // loggedIn
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const user={
            email:this.state.email,
            password:this.state.password
        }
        axios.post(`${API_URL}/users/login`,{
            email:user.email,
            password:user.password
        })
        .then(res=>{
            //console.log(res)
            localStorage.setItem('usertoken',JSON.stringify(
                res.data
            ))
            this.props.history.push('/')
            //return res.header
        })
        .catch(err=>{
            console.log('error aa gya '+err)
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                />                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.onChange}
                                />                                
                            </div>
                            <button type="submit"className="btn btn-primary btn-block btn-lg">
                                Sign In
                            </button>
                        </form>
                        <br/>
                        <a href="/register">New User?</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
