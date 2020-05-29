import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter , Redirect , Link} from 'react-router-dom';
import { Container, Row, Col , Alert , Button, Form, FormGroup, Label, Input , InputGroup ,
InputGroupAddon } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

import NavComp from '../components/MainNavbar.js';
import { MainSidebar } from '../components/MainSidebar.js';
import { SegmentItem , SegmentItemOR } from '../components/listsAndSegment/SegmentItem.js';
import { saveSegment } from '../actions/segmentActions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class createList extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        modal:false
    }
    this.toggle = this.toggle.bind(this);
}
    toggle(){
        this.setState({
          modal: !this.state.modal
        })
      }
      render() {
        return (
            <>
            <Container fluid={true}>
             <NavComp/>            
             <Row>
              <Col xs="2">
                <MainSidebar/>
              </Col>
              <Col xs="10">
                <div id="main">
                    <div className="dashboard-nav-header">
                    <Row>
                        <Col className="campaignHead">
                        <p ><a href="/lists-campaigns">Lists & Segment</a> > Edit <strong></strong> List</p>
                        </Col>
                    </Row>
                    </div>
                    <hr/>
                    <div id="segment-del" className="Card-Table" style={{padding:'30px'}}>
                        <div className="Card-Table-Inner">
                            <p>Give your list a name and we will add people to it.</p>
                            <Form onSubmit={this.onSubmit}>
                                <Row form>
                                    <Col xs={8}>
                                    <FormGroup>
                                        <Label><strong>Name</strong></Label>
                                        <Input bsSize="sm" type="text" name="segment_name" onChange={this.onChange}  />
                                    </FormGroup>
                                    </Col>
                                    <Col xs={4}>
                                    <FormGroup>
                                        <Label><strong>Tag</strong></Label>
                                        <Input bsSize="sm" type="select" name="campaignTag" disabled>
                                            <option>Select tags...</option>

                                        </Input>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                
                                                           
                            </Form>
                        </div>
                        
                    </div>
                    <div class="list-buttons"></div>
                    <Row>
                    
                    <div class="list-button"> <Button size="sm" color="light">Cancel</Button></div>
                       
                     <div class="list-button"><Button size="sm" color="primary" onClick={()=>{this.props.history.push('/list/create/listName')}}><strong>Create List >></strong></Button></div>   
                    
                </Row>
                
                </div>
                </Col>
                </Row>
               
            </Container>
            </>
        )
    }
}

export default createList;

