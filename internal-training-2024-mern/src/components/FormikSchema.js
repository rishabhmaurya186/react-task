import * as Yup from 'yup';
const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().min(2,'First name should at least 2 character').max(60,'First name should less than 60 character').required('Please enter first name.'),
    
    lastName: Yup.string().max(60,'Last name should less than 60 character').required('Please enter last name.'),
  
    email: Yup.string().email('Invalid email').required('Please enter email.'),
  
    mobileNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 digit long').max(20, 'Must be less than 20 digit').required('Please enter mobile number.'),
  
    password: Yup.string().min(6, 'Password must be at least 6 characters long.').max(30,'Password should be less than 30 character').required('Please enter password.'),
  
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match.').required('Please enter confirm password.'),
  });
  

  export default SignUpSchema;