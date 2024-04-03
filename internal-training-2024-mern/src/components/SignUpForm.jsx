import  { useState,useRef } from 'react';
import { Formik, Form,  } from 'formik';
import { NavLink } from 'react-router-dom';
import MyField from './MyField';
import SignUpSchema from './FormikSchema';
import Mybutton from './Mybutton';
const SignUpForm = () => {

  const  initialValues={
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  }
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
  
  <div className='h-[100vh] pt-7'>
    <div className="max-w-md w-full mx-auto bg-white p-12 rounded-lg shadow-lg ">
      <div className="text-center font-medium text-xl mb-6 ">Sign Up</div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="  ">

            <div className='text-center mb-10  flex justify-center min-h-20 '>
                <div className='w-{200} h-{200} rounded-full border-gray-500 p-[2px] border-2  flex justify-center items-center min-w-20'>
                {image ? <img src={URL.createObjectURL(image)} alt="Example Image" onClick={handleIconClick} className='h-[100px] w-[100px] rounded-full' />:null  }

                {!image && <i className="fa-solid fa-user text-5xl text-blue-500" onClick={handleIconClick}></i>}
                <input
                 type="file"
                 accept="image/*"
                 style={{ display: 'none' }}
                 ref={fileInputRef}
                 onChange={handleFileChange}
              />

            </div>
            </div>
            <div className=" flex gap-8">
                <MyField errors={errors.firstName} name={'firstName'} touched={touched.firstName} text={'First Name'} placeholderText={'First name'} />
                <MyField errors={errors.lastName} name={'lastName'} touched={touched.lastName} text={'Last Name'} placeholderText={'Last name'} />
            </div>

            <MyField errors={errors.email} name={'email'} touched={touched.email} text={'Email'} placeholderText={'Email'} />

            <MyField errors={errors.mobileNumber} name={'mobileNumber'} touched={touched.mobileNumber} text={'Mobile Number'} placeholderText={'Mobile Number'} />

            <MyField errors={errors.password} name={'password'} touched={touched.password} text={'Password'} placeholderText={'Password'} />

            <MyField errors={errors.confirmPassword} name={'confirmPassword'} touched={touched.confirmPassword} text={'Confirm Password'} placeholderText={'Confirm Password'} />

            <Mybutton text={'Sign Up'}/>
           <div className='mt-6 text-center '> Already have an account?
           <NavLink to={'/login'} className='text-blue-800 font-bold'> Login
           </NavLink>
           </div> 
          </Form>
        )}
      </Formik>
    </div>
  </div>
  
);}

export default SignUpForm;
