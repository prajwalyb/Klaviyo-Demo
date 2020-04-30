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
                href='/React-DND-Flowchart'
            />
        </div>
        <div className="list-section">
            <MainSidebarItem
                text="Campaigns"
                id='campaigns'
                href='/React-DND-Flowchart'
            />
            <MainSidebarItem
                text="Flows"
                id='flows'
                href='/React-DND-Flowchart/flow'
                />
            <MainSidebarItem
                text="Email Templates"     
                id='emailtemplate'
                href='/React-DND-Flowchart'
            />
        </div>
        <div className="list-section">
            <MainSidebarItem
                text="Lists & Segments"
                id='listsegments'
                href='/React-DND-Flowchart'
            />
            <MainSidebarItem
                text="Profiles"
                id='profiles'
                href='/React-DND-Flowchart'
            />
            <MainSidebarItem
                text="Metrics"
                id='metrics'
                href='/React-DND-Flowchart'
            />    
            </div>
        <div className="list-section">    
            <MainSidebarItem
                text="Integrations"
                id='integrations'
                href='/React-DND-Flowchart'
            />
            <MainSidebarItem
                text="Data Feed"
                id='datafeed'
                href='/React-DND-Flowchart'
            />
        </div>
        <div className="list-section">
            <MainSidebarItem
                text="Signup Forms"
                id='signupforms'
                href='/React-DND-Flowchart'
            />
            <MainSidebarItem
                text="Preference pages"
                id='prefpages'
                href='/React-DND-Flowchart'
            />
        </div>
        <div className="list-section">
            <MainSidebarItem
                text="Image Library"
                id='imagelibrary'
                href='/React-DND-Flowchart'
            />
            <MainSidebarItem
                text="Tags"
                id='tags'
                href='/React-DND-Flowchart'
            />
        </div>
    </Sidepanel>
)