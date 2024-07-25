import React from "react";
import PropTypes from "prop-types";

const Category = ({ cat }) => {
  const { logo, category_name, availability } = cat;
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#7e8ffe20] w-72 h-64 p-12 rounded-lg flex flex-col space-y-3">
        <figure className="p-3 bg-[#7e8ffe43] w-1/3 rounded-md">
        <img src={logo} alt="" />
        </figure>
        <h3 className="text-xl font-extrabold">{category_name}</h3>
        <p className="text-[#A3A3A3] font-medium text-base">{availability}</p>
      </div>
    </div>
  );
};

Category.propTypes = {
  cat: PropTypes.object,
};

export default Category;
