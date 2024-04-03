import { useRef, useState } from 'react';
import PencilIcon from "../components/Cropper/PencilIcon";
import Modal from "../components/Cropper/Modal";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { TextField,  } from "@mui/material";
import { NavLink } from 'react-router-dom';
import Mybutton from '../components/MyComponents/Mybutton';
import 'react-image-crop/dist/ReactCrop.css';
import avatar from '../assets/image/blue-circle-with-white-user_78370-4707.avif'
import HeaderLogo from '../assets/image/image-2LogoImg.png'
import lock from '../assets/image/FramelockPng.png'
import SignUpSchema from '../components/YupSchema/FormikSchema';
import Header from '../components/Header';


const SignUpForm = () => {

  const dashboardButton = useRef('')
  const avatarUrl = useRef(
    avatar
  );
  const [modalOpen, setModalOpen] = useState(false);
  
  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
    
  };


  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    profilePic:'',
  };
  


 

  const handleKeyPress = (e) => {
    if (e.target.value.length >= 60 || e.key === ' ') {
      e.preventDefault();
    }
  };
  const handleKeyPressLast = (e) => {
    if (e.target.value.length >= 60) {
      e.preventDefault();
    }
    if(e.target.value === ''){
      if (e.key === ' ') {
        e.preventDefault();
      }
    }
  };
  
  return (
   
             <div className="  w-[100%] bg-white  rounded-lg ">
                <div className="text-center font-medium text-xl mb-6">Sign Up</div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={SignUpSchema}
                     onSubmit={(values, { setSubmitting }) => {
             
            
                      dashboardButton.current.click()
                        setSubmitting(false);
                        }}
                       >
                     {({ setFieldValue }) => (
                        <Form className=" " action='£'>
                             <div className='text-center  flex  justify-center min-h-20 '>
   

                               <div className="flex flex-col items-center ">
                                <div className="relative">
                                   <img
                                   src={avatarUrl.current}
                                   alt="Avatar"
                                   className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"/>                
                                   <div
                                     className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-300 hover:bg-gray-700 border border-gray-600"
                                     title="Change photo"
                                                 onClick={() => {
                                                   setModalOpen(true)
                                                   setFieldValue('profilePic', avatarUrl)}}>
                                           <PencilIcon />
                                                     </div>
                                           </div>

                                      {modalOpen && (<Modal name={'profilePic'}
                                          updateAvatar={updateAvatar}
                                          closeModal={() => setModalOpen(false)}
                                                     />)}
                                       </div>
                                              </div>
                                 <div className='flex justify-center my-7 '><ErrorMessage name='profilePic' component="div" className='ErrorMessge' /></div>

                              <div className="flex gap-8 ">
                               <div className='w-[50%]'>
                                 <Field
                                   as={TextField}
                                   name='firstName'
                                   label='First Name'
                                   variant="outlined"
                                   fullWidth
                                   margin="normal"
                                   onKeyPress={handleKeyPress}
                                 />
                                 <ErrorMessage name='firstName' component="div" className='ErrorMessge' />
                                </div>
                                <div className='w-[50%]'>
                                 <Field
                                    as={TextField}
                                    name='lastName'
                                    label='Last Name'
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    onKeyPress={handleKeyPressLast}
                                  />
                                  <ErrorMessage name='lastName' component="div" className='ErrorMessge' />
                                </div>
                              </div>
                                                                
                              <div className='mb-3'>
                                <Field
                                  name='email'
                                  as={TextField}
                                  label='Email'
                                  variant="outlined"
                                  fullWidth
                                  margin="normal"
                                />
                <ErrorMessage name='email' component="div" className='ErrorMessge' />
              </div>

              <div className='mb-2'>
                <Field
                  name='mobileNumber'
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={'in'}
                      inputClass="form-control"
                      containerClass="phone-input-container"
                      onChange={function n(value){
                              
                              setFieldValue('mobileNumber',value)
                      }}
                      inputProps={{
                        name: 'mobileNumber',
                        required: true,
                        placeholder: 'Mobile Number',
                        style: { width: '100%', border: '1px solid #ccc', borderRadius: '4px', paddingLeft: '48px', height:'53px' },
                      }}
                    />
                  )}
                />
              <ErrorMessage name='mobileNumber' component="div" className='ErrorMessge' />
              </div>

              <div>
                <Field
                  name='password'
                  as={TextField}
                  label='Password'
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                />
                <ErrorMessage name='password' component="div" className='ErrorMessge' />
              </div>

              <div>
                <Field
                  name='confirmPassword'
                  as={TextField}
                  label='Confirm Password'
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                />
                <ErrorMessage name='confirmPassword' component="div" className='ErrorMessge' />
              </div>

              <Mybutton text={'Sign Up'} />
              <div className='mt-6 text-center '> Already have an account?
                <NavLink to={'/login'} className=' font-bold' style={{color:'#FAA43C'}}> Login
                </NavLink>

                <NavLink to={'/profile/dashboard'} className=' font-bold' style={{display:'none'}} ref={dashboardButton}> 
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
          







  );
}

export default SignUpForm;
