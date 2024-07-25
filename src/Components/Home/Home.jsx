import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = props => {
    return (
        <div className='bg-white text-black'>
            <Banner></Banner>
            <CategoryList/>
            <FeaturedJobs></FeaturedJobs>
            {/* <h1>Home</h1> */}
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;