import React, {Link} from 'react';

function ChartRowEstudio(props){
    
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
                    <td>
                        {props.estado == 'Inactivo' && <div className="btn btn-danger">{props.estado}</div>}
                        {props.estado == 'Activo' && <div className="btn btn-enabled">{props.estado}</div>}
                    </td>
                    <td>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={'http://localhost:3030/estudios/estudio-detalle/' + props.id}>Ver Estudio</a>
                    </td>
                </tr>
            )
    }      

export default ChartRowEstudio;