import React from 'react';
import Flowchart from '../components/Flowchart';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { Sidebar } from '../components/Sidebar';
import NavComp from '../components/MainNavbar.js';

function Flow() {
  return (
    <React.Fragment>
      <NavComp/>
      <DndProvider backend={Backend} >
        <Sidebar/>
        <Flowchart/>
      </DndProvider>
    </React.Fragment>
  );
}

export default Flow;
