import React from 'react';
import LoginForm from '../components/LoginForm';
import BackArrow from '../components/BackArrow';

function Login(props) {
  return (
    <>
      <LoginForm socket={props.socket}/>
      <BackArrow />
    </>
  );
}

export default Login