import React from 'react';
import image from '../../assets/images/digital-lab.svg';
import { Link } from "react-router-dom";


function SideBar(){
    return(
        <ul>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DigiLab</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Opciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/totales">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Totales</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/charts">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/tabla-estudios">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla - Estudios</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/tabla-pacientes">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla - Pacientes</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/tabla-categorias">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla - Categor??as</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </ul>
    )
}
export default SideBar;