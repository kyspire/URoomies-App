import React from 'react';
import Footer from './BottomBar.jsx';
import "../styles/Login.css";

function LoginForm () {
  return (
    <>
      <div className='login-body'>
        <form className='login-form'>
          
          <label htmlFor="email">Email:</label>
          <input type='text' id='email' name='email' placeholder='Enter your email' required></input>
          <br></br>

          <label htmlFor="password">Password:</label>
          <input type='text' id='password' name='password' placeholder='Enter your password' required></input>
          <br></br>

          <label htmlFor="keep-signed-in">
            <input type='checkbox' id='keep-signed-in' name='keep-signed-in' />
            Keep me signed in 
          </label>
          <br></br>

          <input type='submit' value="Log in"></input>

        </form>
      </div>
    </>
    

  )
}

export default LoginForm