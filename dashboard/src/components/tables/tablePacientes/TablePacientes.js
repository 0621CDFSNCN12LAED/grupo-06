import React, {Component} from 'react';
import TableRowPacientes from './TableRowPacientes';

//URL para listado de Categorías
const PACIENTES_API = '/api/pacientes';


export default class TablePacientes extends Component{
    constructor(props){
        super(props);
        this.state = {
            //pacientes: []
        };
        console.log("Evento: Constructor");     
    }
    
    render(){
        if(!this.state.pacientes){
            return('Cargando Lista Pacientes');
        } else{
            return (
                
                /* <!-- DataTales Example --> */
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                        <div>Lista de Pacientes</div>
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                
                                <thead>
                                    <tr>
                                        <th>#id</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Tipo Doc.</th>
                                        <th>Nro Doc.</th>
                                        <th>Fecha Nacimiento</th>
                                        <th>Género</th>
                                        <th>Imagen</th>
                                        <th>Email</th>
                                        <th>Teléfono</th>
                                        <th>Estado</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                    <th>#id</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Tipo Doc.</th>
                                        <th>Nro Doc.</th>
                                        <th>Fecha Nacimiento</th>
                                        <th>Género</th>
                                        <th>Imagen</th>
                                        <th>Email</th>
                                        <th>Teléfono</th>
                                        <th>Estado</th>
                                        <th>URL</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        this.state.pacientes.map( ( row , i) => {
                                        return <TableRowPacientes { ...row} key={i}/>
                                    })
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
    }

    componentDidMount(){
        //console.log("Evento: Montando componente");
        //Fetch de las categorías
        this.fetchPacientes();        
    }

    async fetchPacientes(){
        //Fetch de las categorias
        const result = await fetch(PACIENTES_API);
        
        //Al resultado lo paso a JSON
        const response = await result.json();
        
        //Obtengo un array de categorias
        const pacientes = response.pacientes;   

        //Seteo las categorías como un estado
        this.setState({pacientes: pacientes});
    }
}

