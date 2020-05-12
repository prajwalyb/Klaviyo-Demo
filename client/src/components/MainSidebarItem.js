import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPaperPlane , faNewspaper , faStream , faUsers , faUser, faChartBar ,  faCloud , faWifi , faList , faFile , faImage , faTag} from '@fortawesome/free-solid-svg-icons'

export const MainSidebarItem = ({ text, id ,href}) => {
    var icon;
    if(id==='dashboard')
        icon=faHome
    if(id==='campaigns')
        icon=faPaperPlane
    if(id==='flows')
        icon=faStream
    if(id==='emailtemplate')
        icon=faNewspaper
    if(id==='listsegments')
        icon=faUsers    
    if(id==='profiles')
        icon=faUser
    if(id==='metrics')
        icon=faChartBar    
    if(id==='integrations')
        icon=faCloud
    if(id==='datafeed')
        icon=faWifi    
    if(id==='signupforms')
        icon=faList
    if(id==='prefpages')
        icon=faFile
    if(id==='imagelibrary')
        icon=faImage
    if(id==='tags')
        icon=faTag
    return (
            <div className="list">
                <a href={href}>
                    <div className="list-link" >
                        <FontAwesomeIcon icon={icon} className="icon"/>
                        {text}
                    </div>
                </a>
            </div>
    )
}