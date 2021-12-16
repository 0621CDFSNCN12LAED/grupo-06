import React from 'react';
import ContentRowCenter from '../ContentRowCenter';
import ContentRowTop from './contentRowTop/ContentRowTop';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop />
                    <ContentRowCenter />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;