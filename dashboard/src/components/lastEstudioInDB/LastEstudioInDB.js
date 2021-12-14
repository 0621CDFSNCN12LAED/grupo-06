import React, { Component } from 'react';
//import imagenEstudio from 'IMAGEN';

const ULTIMO_ESTUDIO_API = '/api/estudios/ultimo_estudio_creado';

export default class LastEstudioInDb extends Component{
    constructor(props){
        super(props);
        this.state = {
            estudio: {}
        };
        console.log("Evento: Constructor");     
    }
    
    render(){
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último Estudio Creado Activo: {this.state.estudio.titulo}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            {/*<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>*/}
                        </div>
                        <p>{this.state.estudio.descripcion}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        //console.log("Evento: Montando componente");
        //Fetch de las categorías
        this.fetchEstudio();        
    }

    async fetchEstudio(){


        //Fetch de las categorias
        const result = await fetch(ULTIMO_ESTUDIO_API);
    
        //Al resultado lo paso a JSON
        const estudio = await result.json();
        console.log("ULTIMO ESTUDIO");
        console.log(estudio); 
    
        //Seteo las categorías como un estado
        this.setState({estudio: estudio});
    }
}

