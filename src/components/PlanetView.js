import React from 'react'

const PlanetView = ({ planet }) => {
    return(
        <div>
            <span>Name: {planet.name}</span>
            <p>Population: {planet.population }</p>
            <p>Climate: {planet.climate} </p>
        </div>
    )
}
export default PlanetView;