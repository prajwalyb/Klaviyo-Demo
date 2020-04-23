import * as React from 'react'
import styled from 'styled-components'
import { SidebarItem } from "./Sidebaritem" 

const Sidepanel = styled.div`
    position: fixed;
    order: -1;
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
const Message = styled.div`
    letter-spacing: .5px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: #606A72;
    margin: 32px 0 8px 0;
`

export const Sidebar = () =>(
    <Sidepanel>
        <Message>
            Actions
        </Message>
        <SidebarItem
            bg="white"
            type="Email"        
        />
        <SidebarItem
            bg="white"
            type="Update Profile Property"
        />
        <Message>
            Timming
        </Message>
        <SidebarItem
            bg="#ECF3F5"
            type="Time Delay"
            />
        <Message>
            Logic
        </Message>
        <SidebarItem
            bg="#D9E0E7"
            type="Conditional split"     
        />
        <SidebarItem
            bg="#D9E0E7"
            type="Trigger Split"
            />
    </Sidepanel>
)