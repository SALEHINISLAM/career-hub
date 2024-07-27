import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import Job from "../Job/Job";
import NoJob from "./NoJob";

const AppliedJobs = (props) => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] =useState([]);
  const handleJobFilter=filter=>{
    if (filter==='all') {
        setDisplayJobs(appliedJobs);
    }else if(filter==='remote'){
        const remoteJobs=appliedJobs.filter(job=>job.remote_or_onsite==='Remote');
        setDisplayJobs(remoteJobs)
    }else if(filter==='onsite'){
        const remoteJobs=appliedJobs.filter(job=>job.remote_or_onsite==='Onsite');
        setDisplayJobs(remoteJobs)
    }
  }
  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if (jobs.length > 0) {
      //const jobsApplied=jobs.filter(job=>storedJobId.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      //console.log(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="bg-white text-black">
      <div className="py-32 bg-[#FAF8FF]" id="back1">
        <h2 className="text-4xl font-extrabold text-center text-black">
          Jobs I applied
        </h2>
      </div>
      <div className="flex justify-end">
      <details className="dropdown container mx-auto m-3">
        <summary className="btn m-1 bg-gray-300 btn-ghost">Filter</summary>
        <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow">
          <li
          onClick={()=>handleJobFilter('all')}>
            <a>All</a>
          </li>
          <li
          onClick={()=>handleJobFilter('remote')}
          >
            <a>Remote</a>
          </li>
          <li
          onClick={()=>handleJobFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      </div>
      
      <div className="container mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 m-2">
          {
            displayJobs.length==0? <NoJob/>:displayJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))
          }
        </ul>
      </div>
    </div>
  );
};

AppliedJobs.propTypes = {};

export default AppliedJobs;
