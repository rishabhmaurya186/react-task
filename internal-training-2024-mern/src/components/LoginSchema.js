import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    email: Yup.string().matches(/^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/,'Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
  });

  export default LoginSchema