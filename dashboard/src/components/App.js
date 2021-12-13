import React from 'react';
import SideBar from './sideBar/sideBar';
import { Route, Switch } from "react-router-dom";
import ContentWrapper from './contentWrapper/ContentWrapper';

function App() {
  return (
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              
            <ContentWrapper />
            
            </div>
        
        </div>
      </div>
  );
}

export default App;
