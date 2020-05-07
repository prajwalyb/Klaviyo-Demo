import React from 'react';

import NavComp from '../components/MainNavbar.js';
import { Page } from '../components/Flowchart-Page'
import { DragAndDropSidebar } from '../components/Flowchart-Sidebar'

function Flow() {
  return (
    <>
      <NavComp/>
      <Page>
        <DragAndDropSidebar/>
      </Page>
    </>
  );
}

export default Flow;
