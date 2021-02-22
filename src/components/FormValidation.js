import React from 'react'
import { Form, Input, InputNumber, Checkbox } from 'formik-antd'
import { Formik } from 'formik'
 
function FormValidation() {
  return (
    <Formik
      initialValues={{ firstName: '', age: 20, newsletter: false }}
      render={() => (
        <Form>
          {/* every formik-antd component must have the 'name' prop set: */}
          <Input name='firstName' placeholder='First Name' />
          {/* the rest of the api stays as is */}
          <InputNumber name='age' min={0} />
          <Checkbox name='newsletter'>Newsletter</Checkbox>
        </Form>
      )}
    />
  )
}
export default FormValidation