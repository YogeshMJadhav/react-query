import React from 'react';
import { useField } from 'formik';

const EmailInput = ({label, ...props}) => {
    const [ field, meta ] = useField(props);
    return(
        <div>
            <label htmlFor={field.id || field.props}> {label} </label>
            <input className="text-input" {...field} {...props}/>
            {meta.touched && meta.error ? ( <div className="error">{meta.error}</div>): null}
        </div>
    )
}
export default EmailInput;