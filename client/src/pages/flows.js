import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { withRouter , Redirect} from 'react-router-dom';
import { Table } from 'reactstrap';
import axios from 'axios';

import {API_URL} from '../helpers/utils.js';
import NavComp from '../components/MainNavbar.js';
import { MainSidebar } from '../components/MainSidebar.js';
import { initializeFlow , loadFlowList , deleteFlow , loadSelectedFlow} from '../actions/flowActions.js';

class Flow extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       modal:false,
       flowName:"",
       flowList:[],
       openLayout:false
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
        //console.log(newFlow)
        this.props.initializeFlow(newFlow)
        this.toggle();
        this.props.history.push('/flow/create')
    }

  componentWillReceiveProps(nextProps){ 
    if(this.props.user===null) this.props.loadFlowList();       
    this.setState({
      flowList:nextProps.flow
    })
  }

  onDeleteClick = ( id ) => {
      this.props.deleteFlow(id);
  }

  onEditClick = ( id ) => {
    this.props.loadSelectedFlow(id);
    this.setState({
      openLayout:true
    })
  }

  render () {
    //if(!this.state.openLayout)
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
            <br/>
             <div className="Card-Table">
              <div className="Card-Table-Inner">
                <Table>
                <tbody>
                {(this.state.flowList)?this.state.flowList.map((obj)=>{
                  return(
                    <tr>
                      <td key={obj.flow.flow_id} style={{display: 'flex', alignItems: 'center', overflow: 'visible', flex: '100 0 auto', width: '100px'}}>{obj.flow.flow_name}</td>
                      <div style={{position:'absolute' , display: 'flex', alignItems: 'flex-start', overflow: 'visible', justifyContent: 'flex-end', marginTop: '8px', flex: '16 0 auto',  width: '16px', right:'250px'}}>
                        <button className="btn btnTable" onClick={this.onDeleteClick.bind(this,obj.flow.flow_id)} >Delete</button>
                        <button className="btn btnTable" onClick={this.onEditClick.bind(this,obj.flow.flow_id)}>Edit</button>
                      </div>                      
                    </tr>
                  )
                }):<h1>Loading</h1>
                }
                </tbody>
            </Table>
              </div>              
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
    //Redirect to /create route
    //else return <Redirect to='/flow/create' />
  }
}

const mapStateToProps = state => ({
    user:state.auth.user,
    flow:state.flow.allFlows
})

export default connect( mapStateToProps , { initializeFlow , loadFlowList , deleteFlow , loadSelectedFlow} )(withRouter(Flow));
