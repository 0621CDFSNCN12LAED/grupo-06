import React from 'react';

export default function TableRowCategproas(props){
    
    return ( 
                <tr>
                    <td>{props.id}</td>
                    <td>{props.categoria_nombre}</td>
                    <td>{props.estado}</td>
                    <td>{props.fecha_creacion}</td>
                    <td>{props.fecha_modificacion}</td>
                </tr>
            )
    }
    
        

