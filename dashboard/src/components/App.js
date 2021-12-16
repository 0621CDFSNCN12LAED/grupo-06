import React from 'react';
import SideBar from './sideBar/sideBar';
import { Route, Switch, Redirect } from "react-router-dom";
import ContentWrapper from './contentWrapper/ContentWrapper';
import ContentRowTop from './contentWrapper/contentRowTop/ContentRowTop';
import Error404 from './errors/error404';
import TopNavBar from './topNavBar/TopNavBar';
import Footer from './Footer';
import ContentRowCenter from './ContentRowCenter';
import TablePacientes from './tables/tablePacientes/TablePacientes';
import TableEstudios from './tables/tableEstudios/TableEstudios';
import TableCategorias from './tables/tableCategorias/TableCategorias';

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
                <Route path="/tabla-pacientes" exact={true} component={TablePacientes} />
                <Route path="/tabla-estudios" exact={true} component={TableEstudios} />
                <Route path="/tabla-categorias" exact={true} component={TableCategorias} />
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
