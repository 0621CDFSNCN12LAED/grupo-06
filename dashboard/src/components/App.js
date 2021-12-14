import React from 'react';
import SideBar from './sideBar/sideBar';
import { Route, Switch, Redirect } from "react-router-dom";
import ContentWrapper from './contentWrapper/ContentWrapper';
import ContentRowTop from './contentWrapper/contentRowTop/ContentRowTop';
import CategoriasLista from './contentWrapper/categoriasEstudiosEnDB/categoriasEstudiosEnDB';
import Error404 from './errors/error404';

function App() {
  return (
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              
              {/*<ContentWrapper />*/}
              <Switch>                
                <Route path="/dashboard" exact={true} component={ContentWrapper} />
                <Route path="/totales" exact={true} component={ContentRowTop} />
                <Route path="/charts" exact={true} component={CategoriasLista} />
                <Route path="/tables" exact={true} component={ContentWrapper} />
                <Redirect from="/" exact={true} to="/dashboard" />
                <Route component={Error404} /> 
              </Switch>

            </div>        
        </div>
      </div>
  );
}

export default App;
