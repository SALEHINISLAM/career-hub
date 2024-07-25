import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ErrorPage = props => {
    return (
        <div>
            <h2>OOPs...</h2>
            <Link to="/"><button className='btn-ghost p-2 rounded-md'>Go Back To Home</button></Link>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;