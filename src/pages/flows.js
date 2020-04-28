import React from 'react';
import Flowchart from '../components/Flowchart'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Sidebar } from '../components/Sidebar'

function Flow() {
  return (
    <div >
      <DndProvider backend={Backend} >
        <Sidebar/>
        <Flowchart/>
      </DndProvider>
    </div>
  );
}

export default Flow;
