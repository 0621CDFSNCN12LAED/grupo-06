import React from 'react';

export default function TableRowCategproas(props){
    
    return ( 
                <tr>
                    <td>{props.id}</td>
                    <td>{props.categoria_nombre}</td>
                    <td>
                        {props.estado == 'Inactiva' && <div className="btn btn-danger">{props.estado}</div>}
                        {props.estado == 'Activa' && <div className="btn btn-enabled">{props.estado}</div>}
                    </td>
                    <td>{props.fecha_creacion}</td>
                    <td>{props.fecha_modificacion}</td>
                </tr>
            )
    }
    
        

