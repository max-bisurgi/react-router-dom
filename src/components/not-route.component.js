import React from 'react';
import { withRouter } from 'react-router-dom';

const NotRoute = () => {
    return (
        <div>
            <h1>Not a route component!</h1>
        </div>
    );
};

export default withRouter(NotRoute);