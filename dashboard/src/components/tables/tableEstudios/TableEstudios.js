import React, {Component} from 'react';
import TableRowEstudio from './TableRowEstudio';

//URL para listado de Estudios
const ESTUDIOS_API = '/api/estudios_todos';

export default class TableEstudios extends Component{
    constructor(props){
        super(props);
        this.state = {
            //estudios: {}
        };
        console.log("Evento: Constructor");     
    }
    
    render(){
        if(!this.state.estudios){
            return('Cargando Lista Estudios');
        } else{
            return (
                
                /* <!-- DataTales Example --> */
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                        <div>Lista de Estudios</div>
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                
                                <thead>
                                    <tr>
                                        <th>#id</th>
                                        <th>Título</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Antes</th>
                                        <th>Categoría</th>
                                        <th>Ubicaciones (opciones)</th>
                                        <th>Estado</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>#id</th>
                                        <th>Título</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Antes</th>
                                        <th>Categoría</th>
                                        <th>Ubicaciones (opciones)</th>
                                        <th>Estado</th>
                                        <th>URL</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                    this.state.estudios.map( ( row , i) => {
                                        return <TableRowEstudio { ...row} key={i}/>
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
        //Fetch de los estudios
        this.fetchEstudios();        
    }

    async fetchEstudios(){
        //Fetch de las estudios
        const result = await fetch(ESTUDIOS_API);
        

        //Al resultado lo paso a JSON
        const response = await result.json();
        //Obtengo un array de los estudios
        const estudios = response.data.estudios;   

        //Seteo los estudios como un estado
        this.setState({estudios: estudios});
    }
}

