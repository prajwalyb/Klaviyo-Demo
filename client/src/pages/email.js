import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter , Table } from 'reactstrap';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { withRouter , Redirect , Link } from 'react-router-dom';

import NavComp from '../components/MainNavbar.js';
import { MainSidebar } from '../components/MainSidebar.js';
import { initializeEmail , loadEmailList , deleteEmail ,loadSelectedEmail } from '../actions/emailActions.js';

class Email extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       modal:false,
       emailName:"",
       emailList:[],
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
      const newEmail={
          email_name : this.state.emailName,
          email_id : uuidv4()
      }
      this.props.initializeEmail(newEmail)
      this.toggle();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.user===null) this.props.loadEmailList();       
    this.setState({
      emailList:nextProps.email
    })
  }
  
  onDeleteClick = ( id ) => {
    this.props.deleteEmail(id);
  }

  onEditClick = async( id ) => {
    await this.props.loadSelectedEmail(id);
    this.props.history.push('/email-templates/create')
  }

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
                <button className="btn primaryButton" onClick={this.toggle} >Create Template</button>
              </div>
            </div>
            <div className="dashboard-nav-footer"></div>
            </div>
            <div className="Card-Table">
                <div className="Card-Table-Inner">
                  <Table>
                      <tbody>
                        {
                          (this.state.emailList)?this.state.emailList.map((obj)=>{
                            return(
                              <tr>
                                <td key={obj.email.email_id} style={{display: 'flex', alignItems: 'center', overflow: 'visible', flex: '100 0 auto', width: '100px'}}>{obj.email.email_name}</td>
                                <div style={{position:'absolute' , display: 'flex', alignItems: 'flex-start', overflow: 'visible', justifyContent: 'flex-end', marginTop: '8px', flex: '16 0 auto',  width: '16px', right:'250px'}}>
                                  <button className="btn btnTable" onClick={this.onDeleteClick.bind(this,obj.email.email_id)} >Delete</button>
                                  <button className="btn btnTable" onClick={this.onEditClick.bind(this,obj.email.email_id)}>Edit</button>
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
                  <ModalHeader toggle={this.toggle}>Create Email Template</ModalHeader>
                  <ModalBody>
                    <div className="form-group">
                        <label htmlFor="flow-name">Email Template Name</label>
                        <input type="text"
                        className="form-control"
                        name="emailName"
                        placeholder="e.g. Welcome Series, Post Purchase"
                        value={this.state.emailName}
                        onChange={this.onChange}
                        required
                        />                                
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <button onClick={this.onSubmit} className="btn btn-primary">
                      <Link to="/email-templates/create">Create Template</Link>
                    </ button>
                    <button className="btn" onClick={this.toggle}>Cancel</button>
                  </ModalFooter>
                </form>
              </Modal>  
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    user:state.auth.user,
    email:state.email.allemails
})

export default connect( mapStateToProps , { initializeEmail , loadEmailList , deleteEmail , loadSelectedEmail} )(withRouter(Email));
