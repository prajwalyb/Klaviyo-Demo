import * as React from 'react'
import styled from 'styled-components'
import { MainSidebarItem } from "./MainSidebarItem" 

const Sidepanel = styled.div`
    width: 204px;
    float: left;
    box-sizing: border-box;
    background: #DFE3E6;
    overflow: auto;
`

 export const MainSidebar = () =>(
    <Sidepanel>
        <div className="list-section">
            <MainSidebarItem
                text="Dashboard"
                id='dashboard'
                href='/'
            />
        </div>
        <div className="list-section">
            <MainSidebarItem
                text="Campaigns"
                id='campaigns'
                href='/'
            />
            <MainSidebarItem
                text="Flows"
                id='flows'
                href='/flow'
                />
            <MainSidebarItem
                text="Email Templates"     
                id='emailtemplate'
                href='/email-templates'
            />
        </div>
        <div className="list-section">
            <MainSidebarItem
                text="Lists & Segments"
                id='listsegments'
                href='/'
            />
            <MainSidebarItem
                text="Profiles"
                id='profiles'
                href='/'
            />
            <MainSidebarItem
                text="Metrics"
                id='metrics'
                href='/'
            />    
            </div>
        <div className="list-section">    
            <MainSidebarItem
                text="Integrations"
                id='integrations'
                href='/'
            />
            <MainSidebarItem
                text="Data Feed"
                id='datafeed'
                href='/'
            />
        </div>
        <div className="list-section">
            <MainSidebarItem
                text="Signup Forms"
                id='signupforms'
                href='/'
            />
            <MainSidebarItem
                text="Preference pages"
                id='prefpages'
                href='/'
            />
        </div>
        <div className="list-section">
            <MainSidebarItem
                text="Image Library"
                id='imagelibrary'
                href='/'
            />
            <MainSidebarItem
                text="Tags"
                id='tags'
                href='/'
            />
        </div>
    </Sidepanel>
)