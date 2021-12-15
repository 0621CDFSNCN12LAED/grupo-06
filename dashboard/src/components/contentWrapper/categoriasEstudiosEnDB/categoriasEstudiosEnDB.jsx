import React, {Component} from 'react';

//URL para listado de Categorías
const ESTUDIOS_API = '/api/estudios';

export default class CategoriasLista extends Component{

    constructor(props){
        super(props);
        this.state = {
            countByCategory: []
        };
        //console.log("Evento: Constructor");     
    }
    
    render(){
        //console.log("Evento: Render");

        if(!this.state.countByCategory){
            return('cargando...');
        } else{
        return(
           
          <div class="row">
                {this.state.countByCategory.map((categoria) =>{
                    return ( 
                        <div class="col-lg-6 mb-4">
                          <div class="card bg-dark text-white shadow">
                            <div class="card-body">{categoria.categoria} ({categoria.total}) </div>
                          </div>
                        </div>
                      );
                    
                })}
            </div>            
        );
        }
    }

    componentDidMount(){
        //console.log("Evento: Montando componente");
        //Fetch de las categorías
        this.fetchCategorias();        
    }

    async fetchCategorias(){
        //Fetch de las categorias
        const result = await fetch(ESTUDIOS_API);

        //Al resultado lo paso a JSON
        const response = await result.json();

        //Obtengo un array de categorias
        const countByCategory = response.data.countByCategory;        

        //Seteo las categorías como un estado
        this.setState({countByCategory: countByCategory});
    }
}