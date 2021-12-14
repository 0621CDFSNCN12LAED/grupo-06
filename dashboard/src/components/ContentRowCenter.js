import React from 'react';
import CategoriasEnDB from './contentWrapper/categoriasEstudiosEnDB/categoriasEstudiosEnDB';
import LastEstudioInDb from './lastEstudioInDB/LastEstudioInDB';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            {/*<!-- End content row last movie in Data Base -->*/}
            <LastEstudioInDb />

            {/*<!-- Genres in DB -->*/}
            {/*<GenresInDb />*/}
            <CategoriasEnDB />

        </div>
    )
}

export default ContentRowCenter;