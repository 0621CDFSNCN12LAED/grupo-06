import React from 'react';


function ChartRowEstudio(props){
    console.log("estas son las props" + props);
    return ( 
                <tr>
                    <td>{props.id}</td>
                    <td>{props.titulo}</td>
                    <td>{props.descripcion}</td>
                    <td>${props.precio}.-</td>
                    <td>{props.antes}</td>
                    <td>{props.categoria}</td>
                    <td>
                      {<ul>
                            {props.ubicaciones.map( (ubicacion) => 
                                <li>{ubicacion.descripcion}</li>
                            )}
                       </ul>}
                    </td>
                    <td>{props.url}</td>
                </tr>
            )
    }      

export default ChartRowEstudio;