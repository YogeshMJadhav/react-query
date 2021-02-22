
import React, {useState} from 'react';
import { useMutation, useQueryClient, QueryCache } from 'react-query';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input'

// import { Form, Input, InputNumber, Checkbox } from 'formik-antd'
// import { Formik } from 'formik'

import { Formik, Form, Field, ErrorMessage } from 'formik'

// import {
//   SubmitButton,
//   Input,
//   Checkbox,
//   ResetButton,
//   FormikDebug,
//   Form,
//   FormItem,
// } from "formik-antd"
function AddMutation() {
    const [title, setTitle] = useState('');
    const [ address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState()

    const queryClient = useQueryClient();

    const queryCache = new QueryCache({
      onError: error => {
        console.log(error)
      },
    })

    const createTodo = newTodo => axios.post('http://localhost:4000/student', newTodo)
  
    const mutation = useMutation(createTodo);
    // const onCreateTodo = e => {
    //   console.log('e', e);
    //   e.preventDefault()
    //   let array = {
    //       name : title,
    //       address : address
    //   }
      
    //   mutation.mutate(array)
    //   queryClient.invalidateQueries('people')
    //   // queryClient.setQueryData('people')
    // }
  
    return (
      <div>
      {/* <form>
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
      </form> */}

      {/* <Formik
        initialValues={{ firstName: '', address: ''}}
        render={() => (
          <Form>
             {mutation.error && (
                <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
              )}
              {mutation.isSuccess ? <div>Todo added!</div> : null}
            {/* every formik-antd component must have the 'name' prop set: */}
            {/* <Input name='firstName' placeholder='First Name' onChange={ e =>setTitle(e.target.value)} />
            {/* the rest of the api stays as is */}
            {/* <Input name='address' onChange={e => setAddress(e.target.value)} /> */}
            {/* <Checkbox name='newsletter'>Newsletter</Checkbox> */}
            {/* <button onClick={onCreateTodo}> submit</button> */}
          {/* </Form> */} 
        {/* )}
      /> */} 

          <Formik
            initialValues={{ email: '', password: '', mobile: 0 }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              } else if (!values.password) {
                errors.password = ' Password required.'
              }
              return errors;
            }}

              onSubmit={(values, { setSubmitting }) => {
                let array = {
                  name : values.email,
                  address : values.password
              }

              mutation.mutate(array)
              queryClient.invalidateQueries('people')

              console.log('setSubmitting values', values);
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                {mutation.error && (
                  <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
                )}
                {mutation.isSuccess ? <div>Data added!</div> : null}

                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                {/* <PhoneInput
                  // style={...}
                  // defaultCountry="US"
                  value={mobileNumber}
                  onChange={setMobileNumber} 
                /> */}
              </Form>
            )}
          </Formik>
      </div>
    )
  }
 export default AddMutation;