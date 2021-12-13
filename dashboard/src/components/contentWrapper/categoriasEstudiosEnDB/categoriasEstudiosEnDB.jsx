import React, {Component} from 'react';

//URL para listado de Categorías
const CATEGORIAS_API = '/api/categorias';

export default class CategoriasLista extends Component{

    constructor(props){
        super(props);
        this.state = {
            categorias: []
        };
        console.log("Evento: Constructor");     
    }
    
    render(){
        console.log("Evento: Render");

        if(!this.state.categorias){
            return('cargando...');
        } else{
        return(
           
          <div class="row">
                {this.state.categorias.map((categoria) =>{
                    return (
                        <div class="col-lg-6 mb-4">
                          <div class="card bg-dark text-white shadow">
                            <div class="card-body">{categoria.categoria_nombre}</div>
                          </div>
                        </div>
                      );
                    
                })}
            </div>            
        );
        }
    }

    componentDidMount(){
        console.log("Evento: Montando componente");
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
        console.log('CATEGORIAS');
        console.log(categorias);

        //Seteo las categorías como un estado
        this.setState({categorias: categorias});
        //console.log('CATEGORIAS: ' +  categorias);
        //console.log('THIS CATEGORIAS: ' +  this.state.categorias);
    }


}