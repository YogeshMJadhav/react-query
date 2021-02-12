import React from 'react'
import { useQuery } from 'react-query'
import PlanetView from './PlanetView';

const fetchData = async () => {
    const res = await fetch('https://swapi.dev/api/planets')
    return res.json();
}

const Planet = () => {
    const { data, status } = useQuery('planetData', fetchData);
    console.log(data, status);
    return(
        <div>
            <h3>Planet</h3>
            {/* <span>{status}</span> */}
            { status === 'loading' && <div> Loading data...</div> }
            { status === 'error' && <div> Error fetching data</div> }
            { status === 'success' && data.results.map(planet => <PlanetView key={ planet.name} planet={planet} />) }
            { }
        </div>
    )
}

export default Planet;
