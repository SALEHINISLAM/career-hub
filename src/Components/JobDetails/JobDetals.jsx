import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

const JobDetals = props => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const job=jobs.find(job=> job.id===parseInt(id));
    console.log(id,job);
    const {job_description}=job;
    return (
        <div>
            {/* <h2>job Details of</h2> */}
            <div className="py-32 bg-[#FAF8FF]" id='back1'>
                <h2 className='text-4xl font-extrabold text-center'>Job Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto">
                <div className=" md:col-span-3">
                    <div className="">
                        <p>
                            Job Description: {job_description}
                        </p>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    );
};

JobDetals.propTypes = {
    
};

export default JobDetals;