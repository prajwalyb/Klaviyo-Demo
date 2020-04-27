import * as React from 'react'
import styled from 'styled-components'
import { SidebarItem } from "./Sidebaritem" 

const Sidepanel = styled.div`
        height:100vh;
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

export const Sidebar = ({moveCard}) =>(
    <Sidepanel>
        <Message>
            Actions
        </Message>
        <SidebarItem
            bg="white"
            text="Email"
            id='email'
        />
        <SidebarItem
            bg="white"
            text="Update Profile Property"
            id='updateProfile'
        />
        <Message>
            Timming
        </Message>
        <SidebarItem
            bg="#ECF3F5"
            text="Time Delay"
            id='timeDelay'
            />
        <Message>
            Logic
        </Message>
        <SidebarItem
            bg="#D9E0E7"
            text="Conditional split"     
            id='conditionalSplit'
        />
        <SidebarItem
            bg="#D9E0E7"
            text="Trigger Split"
            id='triggerSplit'
            />
    </Sidepanel>
)