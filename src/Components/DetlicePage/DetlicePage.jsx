import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetlicePage = () => {
    const data = useLoaderData();
    console.log(data)
    const { name, image, id } = data
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <Link
            to='/'
            className='btn btn-warning'
            >
            Back to home
            </Link>
        </div>
    );
};

export default DetlicePage;