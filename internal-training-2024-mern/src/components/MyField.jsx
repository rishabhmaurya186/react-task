import React from 'react'
import { Field } from 'formik'
function MyField({errors, name,touched,text,placeholderText }) {
  return (
    <div className="mb-4">
    <label htmlFor={name}>{text}</label>
      <Field name={name} id={name} placeholder={placeholderText} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 ${errors && touched ? 'border-red-500' : 'border-gray-300'} focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-gray-100 border-b-2 pl-2 `} />
      {errors && touched ? (<div className="text-red-500 text-xs italic">{errors}</div>) : null}
    </div>
  )
}

export default MyField