import React from 'react';

export default function TableRowPacientes(props){
    console.log("estas son las props" + props);
    return ( 
                <tr>
                    <td>{props.id}</td>
                    <td>{props.nombre}</td>
                    <td>{props.apellido}</td>
                    <td>{props.tipo_documento}</td>
                    <td>{props.nro_documento}</td>
                    <td>{props.fecha_nacimiento}</td>
                    <td>{props.genero}</td>
                    <td>{props.img_perfil}</td>
                    <td>{props.email}</td>
                    <td>
                        {props.telefono}
                    </td>
                    <td>
                        {props.estado == 'Inactivo' && <div className="btn btn-danger">{props.estado}</div>}
                        {props.estado == 'Activo' && <div className="btn btn-enabled">{props.estado}</div>}
                    </td>
                    <td>{props.url}</td>
                </tr>
            )
    }           
