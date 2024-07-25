import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Job from "../Job/Job";

const FeaturedJobs = props => {
    const [jobs,setJobs]=useState([]);
  useEffect(()=>{
    fetch('/public/data/jobs.json')
    .then(response=>response.json())
    .then(data=>setJobs(data))
  },[])
    return (
        <div className="container mx-auto">
            <h2 className='text-5xl font-bold text-center'>Featured Jobs: {jobs.length}</h2>
            <p className='text-center text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    jobs.map((job,index)=><Job job={job} key={index}></Job>)
                }
            </div>
        </div>
    );
};

FeaturedJobs.propTypes = {
    
};

export default FeaturedJobs;