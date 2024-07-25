import React from 'react';
import PropTypes from 'prop-types';

const Banner = props => {
    return (
        <div className='bg-[#FAF8FF] pt-28'>
            <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto items-center">
                <div className="flex flex-col">
                    <h1 className='text-7xl font-extrabold text-black'>
                    One Step <br /> Closer To Your <br /><span className='text-[#9873FF]'>Dream Job</span>
                    </h1>
                    <p className='text-[#757575]'>
                    Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                    </p>
                    <button className="bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white rounded-xl p-4 text-xl font-extrabold w-40">Get Started</button>
                </div>
                <div className="">
                    <img src='/public/assets/images/user.png' alt="" />
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    
};

export default Banner;