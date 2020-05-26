import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter , Redirect , Link} from 'react-router-dom';
import { Container, Row, Col , Alert , Button, Form, FormGroup, Label, Input , InputGroup ,
InputGroupAddon } from 'reactstrap';

import NavComp from '../components/MainNavbar.js';
import { MainSidebar } from '../components/MainSidebar.js';
import { SegmentItem , SegmentItemOR } from '../components/listsAndSegment/SegmentItem.js';

class createSegment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            defination:[]
        }
    }
    
    componentDidMount(){
        //this.state.defination.push(<SegmentItem/>)
        console.log(this.state.defination)
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
                        <p ><a href="/lists-campaigns">Lists & Segment</a> > Edit <strong></strong> Segment</p>
                        </Col>
                    </Row>
                    </div>
                    <hr/>
                    <div className="Card-Table" style={{padding:'30px'}}>
                        <div className="Card-Table-Inner">
                            <Form onSubmit={this.onSubmit}>
                                <Row form>
                                    <Col xs={8}>
                                    <FormGroup>
                                        <Label>Name</Label>
                                        <Input type="text" name="segment_name" onChange={this.onChange} placeholder="Enter Segment Name" />
                                    </FormGroup>
                                    </Col>
                                    <Col xs={4}>
                                    <FormGroup>
                                        <Label>Tag</Label>
                                        <Input type="select" name="campaignTag" disabled>
                                            <option>Default Select</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <FormGroup>
                                        <Label>Defination</Label>                                        
                                    </FormGroup>
                                    </Col>
                                </Row>
                                <SegmentItemOR/>
                            </Form>
                        </div>
                    </div>
                </div>
              </Col>
             </Row>
            </Container>
            </>
        )
    }
}

export default createSegment;