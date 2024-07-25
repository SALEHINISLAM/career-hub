import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = props => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    );
};

Root.propTypes = {
    
};

export default Root;