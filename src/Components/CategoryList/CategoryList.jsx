import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const CategoryList = props => {
    const [category,setCategory]=useState([]);
    useEffect(()=>{
        fetch('/data/categories.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div className='container mx-auto flex flex-col space-y-4 py-8'>
            <h2 className='text-5xl font-bold text-center'>Job Category List</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    category.map(cat=>
                        <Category key={cat.id} cat={cat}/>
                    )
                }
            </div>
        </div>
    );
};

CategoryList.propTypes = {
    
};

export default CategoryList;