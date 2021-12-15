import React from 'react';
import TableEstudios from '../../tables/tableEstudios/TableEstudios';
import TablePacientes from '../../tables/tablePacientes/TablePacientes';

function ContentTables(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Tablas disponibles-->*/}
					<TableEstudios />
                    <TablePacientes />
					
				</div>

        </React.Fragment>
    )

}
export default ContentTables;