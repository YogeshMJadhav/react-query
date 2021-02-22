import * as React from "react"
import { Formik } from "formik"
import { SubmitButton, Input, FormikDebug, Form, FormItem, ResetButton } from "formik-antd"
import { message, Button, Row, Col } from "antd"
import * as Yup from 'yup';

function validateRequired(value) {
    return value ? undefined : "required"
}

export const FormikAntdValidation = () => {
  return (
    <div
      style={{
        marginTop: 80,
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}

        validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            password: Yup.string()
               .min(6, 'Must be 6 characters or less')
               .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          })}

        onSubmit={(values, actions) => {
          message.info(JSON.stringify(values, null, 4))
          actions.setSubmitting(false)
          actions.resetForm()
        }}
        validate={(values) => {
            const errors = {};
             if (!values.email) {
                errors.email = 'Required';
            } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            } else if (!values.password) {
                errors.password = ' Password required.'
            } else if (!values.firstName) {
                errors.firstName = 'Required'
            }
            return errors;
        }}
        render={() => (
          <Form
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
            labelCol={{ xs: 4 }}
            wrapperCol={{ xs: 20 }}
          >
            <div style={{ flex: 1 }} />
            <div style={{ background: "white", flex: 1, padding: 40 }}>
              <FormItem
                name="firstName"
                label="Firstname"
                required={true}
                validate={validateRequired}
              >
                <Input name="firstName" placeholder="Firstname" />
              </FormItem>

              <FormItem name="lastName" label="Lastname" required={true} validate={validateRequired}>
                <Input name="lastName" placeholder="Lastname" />
              </FormItem>
              
              <FormItem name="email" label="Email" required={true}>
                <Input name="email" placeholder="Email" />
              </FormItem>

              <FormItem name="password" label="Password" required={true} >
                <Input.Password name="password" placeholder="Password" />
              </FormItem>

              <Row style={{ marginTop: 60 }}>
                <Col offset={8}>
                  <Button.Group>
                    <ResetButton>Reset</ResetButton>
                    <SubmitButton>Submit</SubmitButton>
                  </Button.Group>
                </Col>
              </Row>
            </div>
            {/* <pre style={{ flex: 1 }}>
              <FormikDebug />
            </pre> */}
          </Form>
        )}
      />
    </div>
  )
}
// export default FormikAntdValidation;