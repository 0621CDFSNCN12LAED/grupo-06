import React, { Component } from 'react';
//import imagenEstudio from 'IMAGEN';

const ULTIMO_ESTUDIO_API = '/api/estudios/ultimo_estudio_creado';

export default class LastEstudioInDb extends Component{
    constructor(props){
        super(props);
        this.state = {
            estudio: ''
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
                            {<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'http://localhost:3030/img/estudios_imagenes/' + this.state.estudio.img} alt="{this.state.estudio.titulo}"/>}
                        </div>
                        <p>{this.state.estudio.descripcion}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver más detalle</a>
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
        const response = await result.json();
        
        //Obtengo el objeto estudio último creado
        const estudio = response.data.estudio;
        
        //Seteo las categorías como un estado
        this.setState({estudio: estudio[0]});

        console.log("ULTIMO ESTUDIO");
        console.log(this.state.estudio[0]); 
    }
}

