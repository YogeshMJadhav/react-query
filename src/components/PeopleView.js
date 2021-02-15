import React from 'react'

const PeopleView = ({ people  }) => {
    return(
        <div>
            <span>Name: {people.name}</span>
            <p>Address: {people.address }</p>
            {/* <p>Birth year: {people.birth_year} </p> */}
        </div>
    )
}
export default PeopleView;