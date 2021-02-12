import React from 'react'
import { useQuery } from 'react-query';
import PeopleView from './PeopleView';

const fetchPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people')
    return res.json();
}

const People = () => {
    const {data, status} = useQuery('people', fetchPeople);
    console.log(data);
    return(
        <div className="row">
            <h3>People</h3>
            { status === 'loading' && <div> Loading data... </div>}
            { status === 'error' && <div> Error fetching data. </div>}
            { status === 'success' && data.results.map(people => <PeopleView key={people.name} people={people} /> )}
        </div>
    )
}
export default People