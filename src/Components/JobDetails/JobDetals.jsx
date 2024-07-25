import React from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
const JobDetals = (props) => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  console.log(id, job);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    contact_information,job_title
  } = job;
  return (
    <div className="bg-white">
      {/* <h2>job Details of</h2> */}
      <div className="py-32 bg-[#FAF8FF]" id="back1">
        <h2 className="text-4xl font-extrabold text-center text-black">
          Job Details
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto py-3 text-base md:items-center">
        <div className=" md:col-span-3">
          <div className="flex flex-col space-y-4">
            <p className="text-[#757575]">
              <span className="font-extrabold text-[#1A1919]">
                Job Description:
              </span>
              {job_description}
            </p>
            <p className="text-[#757575]">
              <span className="font-extrabold text-[#1A1919]">
                Job Responsibility:
              </span>
              {job_responsibility}
            </p>
            <h3 className="font-extrabold text-[#1A1919]">
              Educational Requirements:
            </h3>
            <p className="text-[#757575]">{educational_requirements}</p>
            <h3 className="font-extrabold text-[#1A1919]">Experiences:</h3>
            <p className="text-[#757575]">{experiences}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="bg-[#7E90FE] bg-opacity-30 text-black text-xl space-y-2 p-3 rounded-xl">
            <div className="border-b-gray-400 border-b-2">
              <h3 className="font-extrabold">Job Details</h3>
            </div>
            <div className="">
                <div className="flex flex-row items-center gap-1">
                    <img src="/assets/icons/money.png" alt="" className="inline"/>
                    <h3><span className="font-bold">Salary :</span>
                    {salary} (per month)</h3>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <img src="/assets/icons/calendar.png" alt="" />
                    <h3><span className="font-bold">Job Title :</span>
                    {job_title}</h3>
                </div>
            </div>
            <div className="border-b-2 border-b-gray-400">
              <h3 className="font-extrabold">Contact Information</h3>
            </div>
            <div className="">
              <h3>
                <MdOutlineLocalPhone className="inline" />
                <span className="font-bold">Phone: </span>
                {contact_information.phone}
              </h3>
              <h3>
                <MdOutlineMarkEmailUnread className="inline" />
                <span className="font-bold">Email: </span>
                {contact_information.email}
              </h3>
              <h3>
                <CiLocationOn className="inline" />
                <span className="font-bold">Address: </span>
                {contact_information.address}
              </h3>
            </div>
          </div>
          <div className="">
            <button className="bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white rounded-xl p-4 text-xl font-extrabold w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

JobDetals.propTypes = {};

export default JobDetals;
