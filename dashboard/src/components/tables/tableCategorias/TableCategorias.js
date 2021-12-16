import React, {Component} from 'react';
import TableRowCategorias from '././TableRowCategorias';

//URL para listado de Categorías
const CATEGORIAS_API = '/api/categorias';


export default class TableCategorias extends Component{
    constructor(props){
        super(props);
        this.state = {
            //categorias: []
        };
        console.log("Evento: Constructor");     
    }
    
    render(){
        if(!this.state.categorias){
            return('Cargando Lista Categorias');
        } else{
            return (
                
                /* <!-- DataTales Example --> */
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                        <div>Lista de Categorías</div>
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                
                                <thead>
                                    <tr>
                                        <th>#id</th>
                                        <th>Categoría</th>
                                        <th>Estado</th>
                                        <th>Fecha Creación</th>
                                        <th>Fecha Modificación</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                    <th>#id</th>
                                        <th>Categoría</th>
                                        <th>Estado</th>
                                        <th>Fecha Creación</th>
                                        <th>Fecha Modificación</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        this.state.categorias.map( ( row , i) => {
                                        return <TableRowCategorias { ...row} key={i}/>
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
        this.fetchCategorias();        
    }

    async fetchCategorias(){
        //Fetch de las categorias
        const result = await fetch(CATEGORIAS_API);
        
        //Al resultado lo paso a JSON
        const response = await result.json();
        
        //Obtengo un array de categorias
        const categorias = response.data.categorias;   

        //Seteo las categorías como un estado
        this.setState({categorias: categorias});
    }
}

