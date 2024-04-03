import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import AddImage from './DivisionComponents/AddImage';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function DivisionCard({ saveBtn }) {
  const divisionOptions = [
    { value: 'warehouse1', label: 'Warehouse 1' },
    { value: 'warehouse2', label: 'Warehouse 2' },
    { value: 'warehouse3', label: 'Warehouse 3' },
  ];
  const validationSchema = Yup.object().shape({
    title: Yup.string().min(2,'Title must be at least 2 characters long.').required('Please enter title.'),
    warehouse: Yup.string().required('Please select warehouse.'),
    mediaFile: Yup.mixed().required('Please upload image.')
  });
  const handleKeyPress = (e) => {
    if (e.target.value.length >= 60) {
      e.preventDefault();
    }
    if(e.target.value === ''){
      if (e.key === ' ') {
        e.preventDefault();
      }
    }
  };


  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
     
      <Formik
        initialValues={{
          title: '',
          warehouse: '',
          mediaFile:''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
             <AddImage />
            <div className='lg:flex justify-between mt-7'>
              <div className='w-[98%] lg:w-[49%] mt-7 lg:mt-0'>
                <label htmlFor="title">Title</label>
                <Field
                  name='title'
                  as={TextField}
                  variant="outlined"
                  className='w-[100%] mx-[1%]'
                  onKeyPress={handleKeyPress}
                  inputProps={{ maxLength: 60 }}
                />
                <ErrorMessage name="title" component="div" className="text-red-600" />
              </div>

              
            


<div className='w-[98%] lg:w-[49%] mt-7 lg:mt-0'>
  <label htmlFor="warehouse">Main Warehouse<span className='text-red-700'>*</span></label>
  <Field
    name="warehouse"
    as={Select}
    variant="outlined"
    className='w-[100%] '
    onKeyPress={handleKeyPress}
    defaultValue="" // Set initial value to empty string
    displayEmpty // Add this prop
  >
    <MenuItem value="" disabled >Select Warehouse</MenuItem> {/* Disable the placeholder */}
    {divisionOptions.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </Field>
  <ErrorMessage name="warehouse" component="div" className="text-red-600" />
</div>

      </div> 


            <div className='flex gap-4 mt-5'>
              <button
                type='button'
                className='bg-[#D6D2D2] w-[280px] h-[50px] rounded-lg text-xl hover:bg-[#d6d2d2b7]'
                onClick={() => {
                  window.history.back();
                }}
              >Cancel</button>

              <button
                type="submit"
                className='bg-[#FAA43C] w-[280px] h-[50px] rounded-lg text-white text-xl hover:bg-[#faa43cd9]'
                disabled={isSubmitting}
              > {saveBtn} </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DivisionCard;
