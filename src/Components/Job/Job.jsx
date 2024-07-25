import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
    company_name,
  } = job;
  return (
    <div className="border-2 border-gray-500 p-8 m-2 rounded-2xl space-y-4 shadow-lg">
      <img src={logo} alt="" />
      <h3 className="text-2xl font-extrabold">{job_title}</h3>
      <h4 className="text-xl font-semibold">{company_name}</h4>
      <div className="flex flex-row gap-5">
        <button className="btn btn-outline  text-[#9873FF] border-violet-400 font-semibold text-lg">
          {remote_or_onsite}
        </button>
        <button className="btn btn-outline  text-[#9873FF] border-violet-400 font-semibold text-lg">
          {job_type}
        </button>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="text-xl font-semibold">{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-xl font-semibold">Salary: {salary}</p>
        </div>
      </div>
      <div className="">
        <Link to={`/job/${id}`}>
          <button className="bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white rounded-xl p-4 text-xl font-extrabold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
