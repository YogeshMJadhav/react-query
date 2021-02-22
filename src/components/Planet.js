import React, { useState } from 'react'
import { useQuery } from 'react-query'
import AddMutation from './AddMutation';
import PlanetView from './PlanetView';

async function fetchData() {
    // console.log(test);
    const res = await fetch('https://swapi.dev/api/planets/')
    return res.json();
}

const Planet = () => {
    const {
        data, status, 
        isLoading,
        isError,
        error,
        isFetching,
        isPreviousData,
    } = useQuery(['planet', 'hello'], fetchData);

    return(
        <div>
            <h3>Planet</h3>
            {
                isLoading ?
                    <div>Loading....</div>: isError ?
                    <div> Error...</div>:
                    data.results.map(planet => <PlanetView key={ planet.name} planet={planet} />)
                 }
        </div>
    )
}

export default Planet;
