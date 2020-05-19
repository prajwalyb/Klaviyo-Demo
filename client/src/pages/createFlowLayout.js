import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faEnvelope , faUser , faClock , faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { FlowChartWithState , INodeDefaultProps , IPortDefaultProps } from '@mrblenny/react-flow-chart'
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter , Redirect } from 'react-router-dom';

import { chartSimple } from '../components/flows/DefaultChart'
import FlowNavBar from '../components/flows/FlowNavBar.js';
import { Page } from '../components/flows/Flowchart-Page'
import { DragAndDropSidebar } from '../components/flows/Flowchart-Sidebar'
import { API_URL } from '../helpers/utils.js';
import { saveFlow } from '../actions/flowActions.js';

const DefaultNode = styled.div`
  position: absolute;
  padding: 12px;
  background: #D9E0E7;
  color: #606A72;;
  border: 2px solid transparent;
  box-shadow: 0 1px 2px rgba(98,111,126,.66);
  width: 305px;
  box-sizing: border-box;
  justify-content: space-between;
  display:flex;
  flex-direction: column;
`
const Actions = styled.div`
  position: absolute;
  padding: 12px;
  background: #FFF;
  color: #606A72;
  border: 2px solid transparent;
  box-shadow: 0 1px 2px rgba(98,111,126,.66);
  width: 305px;
  box-sizing: border-box;
  justify-content: space-between;
  display:flex;
  flex-direction: column;
`
const Timing = styled.div`
  position: absolute;
  padding: 0 14px;
  background: #ECF3F5;
  color: #606A72;
  border: 2px solid transparent;
  box-shadow: 0 1px 2px rgba(98,111,126,.66);
  width: 305px;
  min-height:10x;
  box-sizing: border-box;
  justify-content: space-between;
  display:flex;
  flex-direction: column;
`
const EndNode = styled.div`
  position: absolute;
  background: #F6F8F9;
  color: #606A72;
  border: 2px solid transparent;
  box-shadow: 0 1px 2px rgba(98,111,126,.66);  
  box-sizing: border-box;
  justify-content: space-between;
  display:flex;
  flex-direction: column;
`
const CanvasOuterCustom = styled.div`
  position: relative;
  background-color: #F6F8F9;
  width: 100%;
  height: 100%;
`
const PortDefaultOuter = styled.div`
  width: 16px;
  height: 16px;
  background: #BAC2CA;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:50%;
`

const NodeCustom = React.forwardRef(({ node, children, ...otherProps }: INodeDefaultProps, ref: React.Ref<HTMLDivElement>) => {
  if (node.type === 'Email' || node.type === 'Update Profile Property') {
    return (
      <Actions ref={ref} {...otherProps}>
          {children}
      </Actions>
    )
  } else if (node.type === 'Time Delay') {
    return (
      <Timing ref={ref} {...otherProps}>
          {children}
      </Timing>
    )
  } 
  else if (node.type === 'End') {
    return (
      <EndNode ref={ref} {...otherProps}>
          {children}
      </EndNode>
    )
  } 
  else {
    return (
      <DefaultNode ref={ref} {...otherProps}>
          {children}
      </DefaultNode>
    )
  }
})

const NodeInnerCustom = ({ node, config }: INodeInnerDefaultProps) => {
  var icon;
  if (node.type === 'When someone Active on Site') 
    icon=faBolt;
  else if (node.type === 'Email')
    icon=faEnvelope
  else if (node.type === 'Update Profile Property')
    icon=faUser
  else if (node.type === 'Time Delay')
  icon=faClock
  else if (node.type === 'Conditional split' || node.type === 'Trigger split')
    icon=faCodeBranch
  if (icon) 
    return (
      <div className="placed-component-body" style={{marginTop:'10px'}}>
        <div className="placed-component-icon-container">
            <div className="placed-component-icon-background">
                <FontAwesomeIcon icon={ icon} className="icon"/>
            </div>
        </div>
        {node.type}
      </div>
    )
  else return <div style={{margin:'10px'}}>{node.type}</div>
  
}

const PortCustom = (props: IPortDefaultProps) => (
  <PortDefaultOuter>
    { props.port.properties && (
      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
        <path fill="white" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    )}
  </PortDefaultOuter>
)

class Flow extends React.Component {

  state={
      chart:this.props.flow.flow_body
  }
  
  saveFlowIT=()=>{
   //console.log(this.state.chart)
    this.props.saveFlow(this.state.chart)
  }

  render () {     
    if(this.props.flow.flow_id && this.props.flow.flow_name){
      return (
        <>
          <FlowNavBar saveFlowIT={this.saveFlowIT}/>
          <Page>
              <DragAndDropSidebar/>
              <FlowChartWithState 
              initialValue={this.state.chart} 
                config={{
                    smartRouting: true ,
                    snapToGrid: true,
                    validateLink: ({ linkId, fromNodeId, fromPortId, toNodeId, toPortId, chart }) => {
                      //console.log(chart.nodes[fromNodeId].type)
                      if (chart.nodes[fromNodeId].ports[fromPortId].type === 'bottom' && chart.nodes[toNodeId].ports[toPortId].type === 'top') return true
                      else{
                        return false
                      }
                    }
                }}
                Components={ {
                  Node: NodeCustom,
                  CanvasOuter: CanvasOuterCustom,
                  Port: PortCustom,
                  NodeInner: NodeInnerCustom,
                }}
                />      
          </Page>
        </>
      )
    } else {
      return(
        <Redirect to='/flow' />
      )
    }
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  flow: state.flow
})

export default connect( mapStateToProps , { saveFlow } )(withRouter(Flow));
