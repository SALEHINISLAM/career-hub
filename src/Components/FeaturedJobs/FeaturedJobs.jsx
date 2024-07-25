import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Job from "../Job/Job";

const FeaturedJobs = props => {
    const [jobs,setJobs]=useState([]);
    //this is not the best way to load data
    const [dataLength, setDataLength]=useState(4);
  useEffect(()=>{
    fetch('/data/jobs.json')
    .then(response=>response.json())
    .then(data=>setJobs(data))
  },[])
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto flex flex-col space-y-8 pt-20 ">
            <h2 className='text-5xl font-bold text-center'>Featured Jobs</h2>
            <p className='text-center text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    jobs.slice(0,dataLength).map((job,index)=><Job job={job} key={index}></Job>)
                }
            </div>
            <div className={dataLength===jobs.length ? 'hidden':'flex justify-center pb-8'}>
                <button
                onClick={()=>{
                    setDataLength(jobs.length)
                }}
                className="bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white rounded-xl p-4 text-xl font-extrabold"
                >
                    Show all
                </button>
            </div>
        </div>
        </div>
        
    );
};

FeaturedJobs.propTypes = {
    
};

export default FeaturedJobs;