import React from 'react'

const PeopleView = ({ people }) => {
    return(
        <div>
            <span>Name: {people.name}</span>
            <p>Gnder: {people.gender }</p>
            <p>Birth year: {people.birth_year} </p>
        </div>
    )
}
export default PeopleView;