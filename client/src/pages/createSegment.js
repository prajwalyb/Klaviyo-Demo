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

class createSegment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            arr:[{AND_id:uuidv4()}]
        }
    }
    
    addAndComponent=()=>{
        this.state.arr.push({AND_id:uuidv4()})
        this.setState({
            arr:this.state.arr
        })
        console.log(this.state.arr)
    }

    removeAndComponent=(id)=>{
        if ( this.state.arr.length > 1 ){
            var newArr=[]
            this.state.arr.forEach(element => {
                if(element.AND_id!=id){
                    newArr.push(element)
                }
            });
            console.log(newArr)
            this.setState({arr:newArr})
            //Deleting correct value but not rendering
        }
    }

    saveAndComponent = ( orArr , AND_id ) => {
        this.state.arr.forEach(element => {
            if(element.AND_id===AND_id){
                element.orArr=orArr
            }
        });
        this.setState({
            arr:this.state.arr
        })
        console.log(this.state.arr)
    }

    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.arr)
        this.props.saveSegment(this.state.arr);
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
                                {
                                    this.state.arr.map(item=>{
                                            return (
                                            <div>
                                                <Row>
                                                    <SegmentItemOR AND_id={item.AND_id} saveAndComponent={this.saveAndComponent}/>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Button onClick={this.addAndComponent} >AND</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button onClick={this.removeAndComponent.bind(this,item.AND_id)}>Remove</Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        )
                                    })
                                }
                                <Button onClick={this.onSubmit}>Save Segment</Button>                            
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

// const mapStateToProps = state => ({
    
// })

export default connect( null , { saveSegment })(createSegment);