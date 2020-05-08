import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faEnvelope , faUser , faClock , faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { FlowChartWithState , INodeDefaultProps} from '@mrblenny/react-flow-chart'

import { chartSimple } from '../components/DefaultChart'
import NavComp from '../components/MainNavbar.js';
import { Page } from '../components/Flowchart-Page'
import { DragAndDropSidebar } from '../components/Flowchart-Sidebar'


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

function Flow() {
  return (
    <>
      <NavComp/>
      <Page>
          <DragAndDropSidebar/>
          <FlowChartWithState 
            initialValue={chartSimple} 
            config={{
                snapToGrid: true,
                validateLink: ({ linkId, fromNodeId, fromPortId, toNodeId, toPortId, chart }) => {
                console.log(chart.nodes[fromNodeId].type)
                if (chart.nodes[fromNodeId].ports[fromPortId].type === 'bottom' && chart.nodes[toNodeId].ports[toPortId].type === 'top') return true
                else if (chart.nodes[fromNodeId].ports[fromPortId].type === 'bottom' || chart.nodes[toNodeId].ports[toPortId].type === 'top') return false
                else{
                  alert('Can not connect nodes')
                  return false
                }
              }
              }}
            Components={ {
              Node: NodeCustom,
              CanvasOuter: CanvasOuterCustom
            }}
            />
        
      </Page>
    </>
  );
}

export default Flow;
