
import React, {useState} from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
function AddMutation() {

//    const mutation = useMutation(newTodo => axios.post('http://localhost:4000/student', newTodo))
 
//    return (
//      <div>
//        {mutation.isLoading ? (
//          'Adding todo...'
//        ) : (
//          <>
//            {mutation.isError ? (
//              <div>An error occurred: {mutation.error.message}</div>
//            ) : null}
 
//            {mutation.isSuccess ? <div>Todo added!</div> : null}
 
//            <button
//              onClick={() => {
//                mutation.mutate({ id: new Date(), name: 'Akshay', address: 'Pune' })
//              }}
//            >
//              Create Todo
//            </button>
//          </>
//        )}
//      </div>
//    )
// const CreateTodo = () => {
    const [title, setTitle] = useState('');
    const [ address, setAddress] = useState('');
    const createTodo = newTodo => axios.post('http://localhost:4000/student', newTodo)
    const mutation = useMutation(createTodo)
    const onCreateTodo = e => {
      e.preventDefault()
      let array = {
          name : title,
          address : address
      }
      mutation.mutate(array)
    }
  
    return (
      <form>
        {mutation.error && (
          <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
        )}
        {mutation.isSuccess ? <div>Todo added!</div> : null}
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
        />
        <br />
        <button onClick={onCreateTodo} type="submit">Create Todo</button>
      </form>
    )
  }
 export default AddMutation;