import React from 'react';
import Footer from './BottomBar.jsx';
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

function LoginForm (props) {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: "", 
    password: "", 
  })

  console.log(formData);

  function handleChange(event) {
    setFormData(prevFormData => {
      const {name, value} = event.target;
      return {
        ...prevFormData, 
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:7776/login', formData)
      .then((res) => {
        console.log(res);
        if(res.data.success == true) {
          localStorage.setItem(`${props.socket.id}`, JSON.stringify(res.data.data));
          console.log(localStorage); 
          alert("Login Successful!");
          navigate("/home");
        } else {
          alert("Incorrect credentials. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <div className='login-body'>

        <img src="/vannight3.jpg" alt="Background" className='login-background-image'/>

        <div className='form-wrapper'>
          <form className='login-form' onSubmit={handleSubmit}>
            
            <label htmlFor="email">Email:</label>
            <input type='text' id='email' name='email' placeholder='Enter your email' onChange={handleChange} value={formData.email} required></input>
            <br></br>

            <label htmlFor="password">Password:</label>
            <input type='text' id='password' name='password' placeholder='Enter your password' onChange={handleChange} value={formData.password} required></input>
            <br></br>

            <label htmlFor="keep-signed-in">
              <input type='checkbox' id='keep-signed-in' name='keep-signed-in' />
              Keep me signed in 
            </label>
            <br></br>

            <input type='submit' value="Log in"></input>

          </form>
        </div>
      </div>
    </>

  )
}

export default LoginForm