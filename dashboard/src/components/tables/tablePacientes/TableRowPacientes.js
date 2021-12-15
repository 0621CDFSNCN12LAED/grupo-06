import React from 'react';

function TableRowPacientes(props){
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
                    <td>Teléfono</td>
                    <td>{props.url}</td>
                </tr>
            )
    }
    
        

export default TableRowPacientes;