import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { withRouter} from 'react-router-dom';

import NavComp from '../components/MainNavbar.js';
import { MainSidebar } from '../components/MainSidebar.js';
import { initializeFlow } from '../actions/flowActions.js';

class Flow extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       modal:false,
       flowName:""
    }
    this.toggle = this.toggle.bind(this);
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange(e){
      this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){
        e.preventDefault();
        const newFlow={
            flow_name : this.state.flowName,
            flow_id : uuidv4()
        }
        console.log(newFlow)
        this.props.initializeFlow(newFlow)
        this.toggle();
        this.props.history.push('/flow/create')
    }

  render () {
    return (
       <React.Fragment>
        <NavComp/>
        <MainSidebar/>
        <div id="main">
            <div className="dashboard-nav-header">
                  <div className="container">
                    <div className="row">
                      <p style={{margin:'0 0 0 -90px'}}>Flows</p>
                      <button className="btn primaryButton" onClick={this.toggle}>
                        Create Flow
                      </button>
                    </div>
                  </div>
                  <div className="dashboard-nav-footer"></div>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} >
              <form onSubmit={this.onSubmit}>
                <ModalHeader toggle={this.toggle}>Create Flow</ModalHeader>
                <ModalBody>
                  <div className="form-group">
                      <label htmlFor="flow-name">Flow Name</label>
                      <input type="text"
                      className="form-control"
                      name="flowName"
                      placeholder="e.g. Welcome Series, Post Purchase"
                      value={this.state.flowName}
                      onChange={this.onChange}
                      required
                      />                                
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button type="submit"  className="btn btn-primary">Create Flow</button>
                  <button className="btn" onClick={this.toggle}>Cancel</button>
                </ModalFooter>
              </form>
            </Modal>  
        </div>
      </React.Fragment>
    )
  }
}

export default connect( null , { initializeFlow } )(withRouter(Flow));
