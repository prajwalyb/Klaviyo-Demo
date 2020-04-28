import * as React from 'react'
import styled from 'styled-components'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faEnvelope , faUser , faClock , faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const Outer = styled.div`
  background: #FFF;
  width: 279px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: 8px 0 0 0;
  box-sizing: border-box;
  border: 1px solid #BAC2CA;
  border-radius: 4px;
  color: #606A72;
  transition: background-color .25s ease-out,color .25s ease-out;
  text-align: center;
`

export const SidebarItem = ({ text, bg , id , index}) => {
    var icon=faBolt;
    if(id==='email')
        icon=faEnvelope
    if(id==='updateProfile')
        icon=faUser
    if(id==='timeDelay')
        icon=faClock 
    if(id==='conditionalSplit'|| id==='triggerSplit')
        icon=faCodeBranch

    const [{ isDragging }, drag] = useDrag({
        item: { id, text, type: ItemTypes.SIDEITEM },
        collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        }),
    })

    return (
        <Outer ref={drag}  style={{background: bg}}>
        <div className="placed-component-icon-container">
            <div className="placed-component-icon-background" >
                <FontAwesomeIcon icon={icon} className="icon"/>
            </div>
        </div>
        <div className="placed-component-body">
            {text}
        </div>
        </Outer>
    )
}