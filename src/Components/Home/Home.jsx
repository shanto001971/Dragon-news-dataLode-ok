import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllData from '../AllData/AllData';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            
            {
                data.map(allData => <AllData key={AllData.id} allData={allData}  />)
            }
        </div>
    );
};

export default Home;