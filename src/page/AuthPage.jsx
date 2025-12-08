import { useState } from 'react';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import { Box } from '@mui/material';
import OtpInput from '../Auth/OtpInput';

const AuthPage = () => {
   const [step, setstep] = useState('register')
   const [signupdata, setsignupdata] = useState(null)
  return (
    <Box>
      {step === 'login' && <Login onToggle={() => setstep('register')} />}
      {step === 'register' && <SignUp onOtpSent={(data) => {
        setsignupdata( data );
        setstep('otp');
       
      }}  onToggle = {() => setstep('login')} />}
      {step === 'otp' && <OtpInput signupData={signupdata} goBack={() => setstep('login')} />}


    </Box>
  );
};

export default AuthPage;
