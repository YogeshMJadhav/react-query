import React, { useState } from 'react'
import { useQuery } from 'react-query';
import AddMutation from './AddMutation';
import AddPeople from './AddPeople';
import FormValidation from './FormValidation';
import PeopleView from './PeopleView';
import SignupForm from './Signup';

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
        {/* <AddMutation /> */}
        <SignupForm />
        {/* <FormValidation /> */}
            { status === 'loading' && <div> Loading data... </div>}
            { status === 'error' && <div> Error fetching data. </div>}
            { status === 'success' && data.map(people => <PeopleView key={people.name} people={people} /> )}
            
        </div>
    )
}
export default People