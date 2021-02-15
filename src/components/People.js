import React, { useState } from 'react'
import { useQuery } from 'react-query';
import AddPeople from './AddPeople';
import PeopleView from './PeopleView';

async function fetchPeople(){
    const res = await fetch('http://localhost:4000/student')
    return res.json();
}

const People = () => {
    const [peopleOpen, setPeopleOpen] = useState(false);
    const {data, status} = useQuery(['people'], fetchPeople);
    console.log('data', data);
    return(
        <div className="row">
            <h3>People</h3>
            { status === 'loading' && <div> Loading data... </div>}
            { status === 'error' && <div> Error fetching data. </div>}
            { status === 'success' && data.map(people => <PeopleView key={people.name} people={people} /> )}
        </div>
    )
}
export default People