import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DivisionHeader from '../MyComponents/DivisionHeader';
import AddImage from '../Division/DivisionComponents/AddImage';
import add from '../../assets/image/add.png';
import SingleInput from '../Division/DivisionComponents/SingleInput';

function AddMedia() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2,'Name must be at least 2 characters long.').required('Please enter name.'),
    sortBy: Yup.string(),
    mediaFile: Yup.mixed().required('Please upload image.')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='bg-[#00000089] h-[100vh] w-[100vw] fixed top-0 left-0 flex justify-center items-center' style={{ zIndex: '100' }}>
       <Formik
          initialValues={{
            name: '',
            sortBy: '',
            mediaFile: null
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
      <div className='bg-white rounded-xl flex flex-col px-4'>
        <DivisionHeader text={'Add Media'} />
        <AddImage />
        <div className='mt-6'><img src={add} alt="Add" /></div>

       
             <div className='w-[200%]'><SingleInput title={'Name'} name='name' /></div>
              <div className='w-[200%]'> <SingleInput title={'Sort By'} name='sortBy' /></div>

             
             

              
              <div className='flex gap-4 mt-5 mb-6 justify-center'>
                <button
                  type="submit"
                  className='bg-[#FAA43C] w-[280px] h-[50px] rounded-lg text-white text-xl hover:bg-[#faa43cd9]'
                  disabled={isSubmitting}
                > Apply </button>
              </div>
           
        
            </div>
            </Form>
          )}
      </Formik>
    </div>
 
  )
}

export default AddMedia;
