import React from 'react'
import { useMutation, useQueryClient} from 'react-query';
import { removeStudent } from '../services/delete';

const PeopleView = ({ people }) => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading, isSuccess, isError} = useMutation(removeStudent);

    const remove = async () => {
        await mutateAsync(people.id)
        queryClient.invalidateQueries('people')
    }

    return(
        <div>
            <span>Name: {people.name}</span>
            <p>Address: {people.address }</p>
            <button onClick={remove}> {isSuccess ? "Successfully" :isError ? "Error" : null} Remove </button>
        </div>
    )
}
export default PeopleView;