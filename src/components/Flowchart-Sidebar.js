import * as React from 'react'
import styled from 'styled-components'

import { Page } from './Flowchart-Page'
import { SidebarItem } from './Flowchart-SideBarItem'

const Message = styled.div`
    letter-spacing: .5px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: #606A72;
    margin: 32px 0 8px 0;
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
              linkColor: '#BAC2CA',
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
              linkColor: '#BAC2CA',
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
              linkColor: '#BAC2CA',
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
              linkColor: '#BAC2CA',
            }
          },
          port3: {
            id: 'port3',
            type: 'bottom',
            properties: {
              custom: 'property',
              linkColor: '#BAC2CA',
            }
          }
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
              linkColor: '#BAC2CA',
            }
          },
          port3: {
            id: 'port3',
            type: 'bottom',
            properties: {
              custom: 'property',
              linkColor: '#BAC2CA',
            }
          }
        }}        
      />
    </Sidebar>
  </Page>
)
