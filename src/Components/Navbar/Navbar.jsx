import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = (props) => {
  
    const links=<>
    <li><NavLink to="/" id="side">Home</NavLink></li>
    <li><NavLink to="/jobs" id="side">Jobs</NavLink></li>
    <li><NavLink to="/statistics" id="side">Statistics</NavLink></li>
    <li><NavLink to="/applied" id="side">Applied Jobs</NavLink></li>
    <li><NavLink to="/blogs" id="side">Blogs</NavLink></li>
    </>
  return (
    <div className="navbar fixed bg-[#FAF8FF] bg-opacity-50 py-4 text-black md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="/assets/logo/CareerHub.png" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white rounded-xl p-4 text-xl font-extrabold">Start Applying</a>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
