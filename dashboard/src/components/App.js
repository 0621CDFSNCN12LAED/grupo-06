import React from 'react';
import SideBar from './sideBar/sideBar';
import { Route, Switch, Redirect } from "react-router-dom";
import ContentWrapper from './contentWrapper/ContentWrapper';
import ContentRowTop from './contentWrapper/contentRowTop/ContentRowTop';
import Error404 from './errors/error404';
import TopNavBar from './topNavBar/TopNavBar';
import ContentTables from './contentWrapper/contentTables/ContentTables';
import Footer from './Footer';
import ContentRowCenter from './ContentRowCenter';

function App() {
  return (
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <TopNavBar />

              <Switch>                
                <Route path="/dashboard" exact={true} component={ContentWrapper} />
                <Route path="/totales" exact={true} component={ContentRowTop} />
                <Route path="/charts" exact={true} component={ContentRowCenter} />
                <Route path="/tables" exact={true} component={ContentTables} />
                <Redirect from="/" exact={true} to="/dashboard" />
                <Route component={Error404} /> 
              </Switch>

            </div>
            <Footer />      
        </div>
      </div>
  );
}

export default App;
