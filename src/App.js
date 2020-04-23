import React from 'react';
import Flowchart from './Flowchart'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Sidebar } from './Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <DndProvider backend={Backend} >
        <Flowchart/>
      </DndProvider>
    </div>
  );
}

export default App;
