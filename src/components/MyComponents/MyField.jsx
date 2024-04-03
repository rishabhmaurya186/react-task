import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Typography, Grid, InputLabel } from "@mui/material";
import '../../App.css';
import { Label } from '@mui/icons-material';

function MyField({ errors, name, touched, text, placeholderText, type = 'text', labelName }) {
  return (
    <div className="">
      <InputLabel htmlFor={name} style={{ color: 'black', fontWeight: '300', fontSize: '18px', }}>
        {labelName}
      </InputLabel>
      <Field
        as={TextField}
        name={name}
        variant="outlined"
        fullWidth
        margin="normal"
        type={type}
        placeholder={placeholderText}
        className=" shadow-sm lg:shadow-none " // Add custom CSS class here
      />
      <ErrorMessage name={name} component="div" className="text-red-600" />
    </div>
  )
}

export default MyField;
