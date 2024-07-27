import React from 'react';
import PropTypes from 'prop-types';

const NoJob = props => {
    return (
        <div>
            <h2 className='text-5xl px-4 py-8 pb-10 m-4 font-bold text-center'>No job found!</h2>
            <p className='text-2xl px-4 py-8 pb-10 m-4 font-semibold text-center'>If you do not apply yet, please apply now.</p>
        </div>
    );
};

NoJob.propTypes = {
    
};

export default NoJob;