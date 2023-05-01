import React from 'react';
import { Link } from 'react-router-dom';

const AllData = ({ allData }) => {
    const { name, image, id } = allData
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <button className='btn btn-warning'><Link to={`/data/${id}`}>More Detlice</Link></button>
        </div>
    );
};

export default AllData;