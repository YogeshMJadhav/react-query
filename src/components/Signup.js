 import React from 'react';
 import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
 import * as Yup from 'yup';
 import MyTextInput from './FormValidation/TextInput'; 
import NumberInput from './FormValidation/NumberInput';
import EmailInput from './FormValidation/EmailInput';

 const SignupForm = () => {
   return (
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '', mobileNumber: '' }}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         mobileNumber: Yup.number()
            .min(10, 'Must be 10 characters or less')
            .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {formik => (
         <Form>
          <MyTextInput
             label="First Name"
             name="firstName"
             type="text"
             placeholder="Jordan"
           />

         <MyTextInput
             label="Last Name"
             name="lastName"
             type="text"
             placeholder="Walk"
           />
 
         <NumberInput 
            label="Mobile Number"
            name="mobileNumber"
            type="number"
            placeholder="1234"
         />
        
        <EmailInput 
            label="Email Address"
            name="email"
            type="text"
        />
         <button type="submit">Submit</button>
       </Form>
       )}
     </Formik>
   );
 };
 export default SignupForm;