import React, { Component } from 'react';
import SmallCard from './SmallCard';

//APIS RUTAS
const CATEGORIAS_API = '/api/categorias';
const ESTUDIOS_API = '/api/estudios';
const PACIENTES_API = '/api/pacientes';

//Tarjetas de totales
let totales_tarjetas = [];

export default class ContentRowMovies extends Component{
    constructor(props){
        super(props);
        this.state = {
            totales_tarjetas: ''
        };
        console.log("Evento: Constructor");     
    }

    render()
    {
        console.log("Evento: Render");    
    return (    
        <div className="row">
            
            {totales_tarjetas.map( (tarjeta, i) => {

                return <SmallCard {...tarjeta} key={i}/>
            
            })}
            
        </div>
    )
    }

    componentDidMount(){
        console.log("Evento: Montando componente");

        //Fetch de las categorías
        this.fetchCategorias();   
        this.fetchEstudios();
        this.fetchPacientes();
        
    }

    async fetchCategorias(){
        //Creo objeto de Categorias
        let objetoCategorias = {
            title: 'Total Categorías',
            color: 'primary',
            quantity: 0,
            icon: 'fa-award'
        }

        //Fetch de las categorias
        const resultado = await fetch(CATEGORIAS_API);

        //Aplico Formato JSON
        const response = await resultado.json();

        //Obtengo y guardo eñ total de categorias en su objeto
        const categorias_total = response.data.count;        

        objetoCategorias.quantity = categorias_total;
        totales_tarjetas.push(objetoCategorias);

        //Seteo total Estudios como un estado
        this.setState({objetoCategorias: objetoCategorias});
    };

    
    async fetchEstudios(){
        //Creo objeto de Estudios
        let objetoEstudios = {
            title: 'Total Estudios',
            color: 'success',
            quantity: 0,
            icon: 'fa-clipboard-list',
            titulo_promedio: 'Monto Prom.',
            promedio: 0.0,
            simbolo: '$'
        }
        //Fetch de los estudios
        const resultado = await fetch(ESTUDIOS_API);

        //Aplico Formato JSON
        const response = await resultado.json();

        //Obtengo y guardo total de estudios en su objeto
        const estudios_total = response.data.count;
        
        objetoEstudios.quantity = estudios_total;
        objetoEstudios.promedio = response.data.precioPromedio;
        totales_tarjetas.push(objetoEstudios);

        //Seteo total Estudios como un estado
        this.setState({objetoEstudios: objetoEstudios});
    }

    async fetchPacientes(){
        //Creo objeto de Pacientes
        let objetoPacientes = {
            title: 'Total Pacientes',
            color: 'warning',
            quantity: 0,
            icon: 'fa-user-check',
            titulo_promedio: 'Edad Prom.',
            promedio: 0,
        }
        //Fetch de los estudios
        const resultado = await fetch(PACIENTES_API);

        //Aplico Formato JSON
        const response = await resultado.json();

        //Obtengo y guardo total de estudios en su objeto
        const pacientes_total = response.count;

        objetoPacientes.quantity = pacientes_total;
        objetoPacientes.promedio = response.edad_promedio;
        totales_tarjetas.push(objetoPacientes);

        //Seteo total Estudios como un estado
        this.setState({objetoPacientes: objetoPacientes});
    }
    
}

