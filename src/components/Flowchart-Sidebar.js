import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState } from '@mrblenny/react-flow-chart'

import { Page } from './Flowchart-Page'
import { SidebarItem } from './Flowchart-SideBarItem'
import { chartSimple } from './DefaultChart'

const Message = styled.div`
    letter-spacing: .5px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: #606A72;
    margin: 32px 0 8px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`

const Sidebar = styled.div`
    order: -1;
    overflow-y: auto;
    flex: 0 0 350px;
    padding: 32px;
    background: #FFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    font-family: proxima-nova,Lato,"Helvetica Neue",Helvetica,Arial,sans-serif;
`

export const DragAndDropSidebar = () => (
  <Page>
    <Content>
      <FlowChartWithState 
        initialValue={chartSimple} 
        config={{
            snapToGrid: true,
            validateLink: ({ linkId, fromNodeId, fromPortId, toNodeId, toPortId, chart }) => {
            if (chart.nodes[fromNodeId].ports[fromPortId].type === 'bottom' && chart.nodes[toNodeId].ports[toPortId].type === 'top') return true
            else{
              alert('Can not connect nodes')
              return false
            }
          }
          }}
        />
    </Content>
    <Sidebar>
      <Message>
        Actions
      </Message>
      <SidebarItem
        bg="white"
        type="Email"
        ports={{
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            }
          },
          port2: {
            id: 'port2',
            type: 'bottom',
            properties: {
              custom: 'property',
            }
          }
        }}        
      />
      <SidebarItem
        bg="white"
        type="Update Profile Property"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            }
          },
          port2: {
            id: 'port2',
            type: 'bottom',
            properties: {
              custom: 'property',
            }
          },
        }}        
      />
      <Message>
        Timming
      </Message>
      <SidebarItem
        bg="#ECF3F5"
        type="Time Delay"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            }
          },
          port2: {
            id: 'port2',
            type: 'bottom',
            properties: {
              custom: 'property',
            }
          },
        }}        
      />
      <Message>
        Logic
      </Message>
      <SidebarItem
        bg="#D9E0E7"
        type="Conditional split"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            }
          },
          port2: {
            id: 'port2',
            type: 'bottom',
            properties: {
              custom: 'property',
            }
          },
        }}        
      />
      <SidebarItem
        bg="#D9E0E7"
        type="Trigger Split"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            }
          },
          port2: {
            id: 'port2',
            type: 'bottom',
            properties: {
              custom: 'property',
            }
          },
        }}        
      />
    </Sidebar>
  </Page>
)
