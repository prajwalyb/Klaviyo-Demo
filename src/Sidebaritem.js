import * as React from 'react'
import styled from 'styled-components'

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
export const SidebarItem = ({ type, ports , properties , bg}) => {
 // console.log(faEnvelope)
  return (
    <Outer
      style={{background: bg}}
    //   draggable={true}
    //   onDragStart={ (event) => {
    //     event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports , properties }))
    //   } }
    >
    <div className="icon-container" >
      {/* <FontAwesomeIcon 
        className="icon-bg" 
        icon={faClock}
      /> */}
      {type}
    </div>
    </Outer>
  )
}