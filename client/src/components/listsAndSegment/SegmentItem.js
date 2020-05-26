import React, { Component } from 'react'
import { Row, Col , Button , Dropdown, DropdownToggle, DropdownMenu, DropdownItem , Label , Input } from 'reactstrap';

import { SegmentConditions } from './List&SegmentData.js'

export class SegmentItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modalCondition:false,
            modal1:false,
            modal2:false,
            modal3:false,
            ddVal:""
        }
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(){
        this.setState({
            modalCondition: !this.state.modalCondition
        })
    }

    changeValue(obj){
        this.setState({ddVal:obj})
        console.log(obj)
    }

    render() {
        return (
            <>
            <Row>
                <Col>
                    <Dropdown isOpen={this.state.modalCondition} toggle={this.toggle}>
                        <DropdownToggle caret>
                            {
                                (this.state.ddVal) ? this.state.ddVal.text : "Select A Condition"
                            }
                        </DropdownToggle>
                        <DropdownMenu>
                            {
                                SegmentConditions.map( ( condition , index ) => { 
                                    return(
                                        <>  
                                            <DropdownItem divider />
                                            <DropdownItem key={index} value={condition} onClick={this.changeValue.bind(this,condition)}>{condition.text}</DropdownItem>
                                        </>
                                    )
                                })
                            }                        
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col>
                    <Button onClick={()=>this.setState({ddVal:""})}>Clear</Button>
                </Col>
            </Row>            
            {
                (()=>{
                    if(this.state.ddVal.id===1){
                        return(
                            <Row>
                                <Label><strong>Has</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal1} toggle={()=>this.setState({modal1:!this.state.modal1})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.metricVal) ? this.state.metricVal : "Choose Metric"
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.metric.map( ( metric , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({metricVal:metric})}>{metric}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Dropdown isOpen={this.state.modal2} toggle={()=>this.setState({modal2:!this.state.modal2})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.freqVal) ? this.state.freqVal : this.state.ddVal.frequency[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.frequency.map( ( freq , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({freqVal:freq})}>{freq}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Dropdown isOpen={this.state.modal3} toggle={()=>this.setState({modal3:!this.state.modal3})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.timeVal) ? this.state.timeVal : this.state.ddVal.time[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.time.map( ( time , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({timeVal:time})}>{time}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Button>OR</Button>
                            </Row>
                        )
                    } else if(this.state.ddVal.id===2){
                        return(
                            <Row>
                                <Col>
                                    <Dropdown isOpen={this.state.modal1} toggle={()=>this.setState({modal1:!this.state.modal1})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.dimensionVal) ? this.state.dimensionVal : "Dimensions"
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.dimensions.map( ( dimension , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({dimensionVal:dimension})}>{dimension}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Dropdown isOpen={this.state.modal2} toggle={()=>this.setState({modal2:!this.state.modal2})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.conditionVal) ? this.state.conditionVal : this.state.ddVal.condition[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.condition.map( ( condition , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({conditionVal:condition})}>{condition}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Input type="text" value={this.state.dim} onChange={()=>this.setState({dim:this.state.dim})} placeholder="Dimension Value" />
                                </Col>
                                <Label><strong>Type:</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal3} toggle={()=>this.setState({modal3:!this.state.modal3})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.typeVal) ? this.state.typeVal : this.state.ddVal.type[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.type.map( ( type , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({typeVal:type})}>{type}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Button>OR</Button>
                            </Row>
                        )
                    } else if(this.state.ddVal.id===3){
                        return(
                            <Row>
                                <Label><strong>Location</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal1} toggle={()=>this.setState({modal1:!this.state.modal1})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.locationVal) ? this.state.locationVal : this.state.ddVal.location[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.location.map( ( location , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({locationVal:location})}>{location}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Label><strong>Location</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal2} toggle={()=>this.setState({modal2:!this.state.modal2})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.regionVal) ? this.state.regionVal : "Choose region.."
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.region.map( ( region , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({regionVal:region})}>{region}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>                                
                                <Button>OR</Button>
                            </Row>
                        )
                    } else if(this.state.ddVal.id===4){
                        return(
                            <Row>
                                <Label><strong>Person</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal1} toggle={()=>this.setState({modal1:!this.state.modal1})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.personVal) ? this.state.personVal : this.state.ddVal.person[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.person.map( ( person , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({personVal:person})}>{person}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Label><strong>Within</strong></Label>
                                <Col>
                                    <Input type="text" value={this.state.within} onChange={()=>this.setState({dim:this.state.within})} />
                                </Col>
                                <Col>
                                    <Dropdown isOpen={this.state.modal3} toggle={()=>this.setState({modal3:!this.state.modal3})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.dimensionVal) ? this.state.dimensionVal : this.state.ddVal.dimensions[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.dimensions.map( ( dimension , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({dimensionVal:dimension})}>{dimension}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Label><strong>of</strong></Label>
                                <Col>
                                    <Input type="text" value={this.state.of} onChange={()=>this.setState({dim:this.state.of})} placeholder="Postal/Zip Code"/>
                                </Col>
                                <Label><strong>in</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal2} toggle={()=>this.setState({modal2:!this.state.modal2})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.countryVal) ? this.state.countryVal : "Choose country"
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.countries.map( ( country , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({countryVal:country})}>{country}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>                                
                                <Button>OR</Button>
                            </Row>
                        )
                    } else if(this.state.ddVal.id===5){
                        return(
                            <Row>
                                <Label><strong>Person</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal1} toggle={()=>this.setState({modal1:!this.state.modal1})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.personVal) ? this.state.personVal : this.state.ddVal.person[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.person.map( ( person , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({personVal:person})}>{person}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Label><strong>in</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal2} toggle={()=>this.setState({modal2:!this.state.modal2})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.listVal) ? this.state.listVal : "Choose a list.."
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.lists.map( ( list , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({listVal:list})}>{list}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>                                
                                <Button>OR</Button>
                            </Row>
                        )
                    } else if(this.state.ddVal.id===6){
                        return(
                            <Row>
                                <Label><strong>Person</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal1} toggle={()=>this.setState({modal1:!this.state.modal1})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.personVal) ? this.state.personVal : this.state.ddVal.person[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.person.map( ( person , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({personVal:person})}>{person}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Label><strong>supressed</strong></Label>                               
                                <Button>OR</Button>
                            </Row>
                        )
                    } else if(this.state.ddVal.id===7){
                        return(
                            <Row>
                                <Label><strong>Person</strong></Label>
                                <Col>
                                    <Dropdown isOpen={this.state.modal1} toggle={()=>this.setState({modal1:!this.state.modal1})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.attributeVal) ? this.state.attributeVal : this.state.ddVal.attribute[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.attribute.map( ( attribute , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({attributeVal:attribute})}>{attribute}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Dropdown isOpen={this.state.modal2} toggle={()=>this.setState({modal2:!this.state.modal2})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.personVal) ? this.state.personVal : this.state.ddVal.person[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.person.map( ( person , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({personVal:person})}>{person}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Dropdown isOpen={this.state.modal3} toggle={()=>this.setState({modal3:!this.state.modal3})}>
                                        <DropdownToggle caret>
                                            {
                                                (this.state.possibilityVal) ? this.state.possibilityVal : this.state.ddVal.possibility[0]
                                            }
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                this.state.ddVal.possibility.map( ( possibility , index ) => { 
                                                    return(
                                                        <>  
                                                            <DropdownItem divider />
                                                            <DropdownItem key={index} onClick={()=>this.setState({possibilityVal:possibility})}>{possibility}</DropdownItem>
                                                        </>
                                                    )
                                                })
                                            }                        
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>                         
                                <Button>OR</Button>
                            </Row>
                        )
                    }
                })()
            }
            </>
        )
    }
}

export class SegmentItemOR extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            arr:[]
        }
        
    }
    // componentDidMount(){
    //     this.state.arr.push(<SegmentItem/>)
    //     console.log(this.state.arr)
    // }

    render(){        
        return(
            <>
                <SegmentItem/>
            </>
        )
    }
}