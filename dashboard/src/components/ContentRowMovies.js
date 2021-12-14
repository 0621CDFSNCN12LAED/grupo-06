import React, { Component } from 'react';
import SmallCard from './SmallCard';

//APIS RUTAS
const CATEGORIAS_API = '/api/categorias';
const ESTUDIOS_API = '/api/estudios';
const PACIENTES_API = '/api/pacientes';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 99,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

export default class ContentRowMovies extends Component{
    constructor(props){
        super(props);
        this.state = {
            categorias_total: 0,
            pacientes_total: 0,
            estudios_total: 0,
        };
        console.log("Evento: Constructor");     
    }

    render()
    {
        console.log("Evento: Render");
    

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
    }

    componentDidMount(){
        console.log("Evento: Montando componente");
        //Fetch de las categorías
        this.fetchCategorias();   
        this.fetchEstudios();
        console.log(this.state);     
    }

    async fetchCategorias(){
        //Fetch de las categorias
        const resultado = await fetch(CATEGORIAS_API);

        //Aplico Formato JSON
        const response = await resultado.json();

        //Obtengo total de categorias
        const categorias_total = response.data.count;        

        console.log("TOTAL DE CATEGORIAS: ");
        console.log(categorias_total);

        //Seteo total Estudios como un estado
        this.setState({categorias_total: categorias_total});
    };

    async fetchEstudios(){
        //Fetch de los estudios
        const resultado = await fetch(ESTUDIOS_API);

        //Aplico Formato JSON
        const response = await resultado.json();

        //Obtengo total de estudios
        const estudios_total = response.data.count;        

        console.log("TOTAL DE ESTUDIOS: ");
        console.log(estudios_total);
        //Seteo total Estudios como un estado
        this.setState({estudios_total: estudios_total});
    }
}

