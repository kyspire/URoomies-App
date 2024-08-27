import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import "../styles/Signup.css";


//profilepicture as null for now becayse idk how to import it
const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "", 
    name: "", 
    email: "", 
    password: "", 
  })

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
    console.log(formData);
    event.preventDefault();
    axios
      .post('http://localhost:7776/signup', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <>
      <div className='signup-body'>

        <img src='../../public/van.jpg' alt='Background' className='signup-background-image'/>

        <div className='form-wrapper'>
          <form className='signup-form' onSubmit={handleSubmit}>
            <label htmlFor='username'>
              Username:
            </label>
            <input type="text" id = "username" name="username" placeholder="Enter a username" value={formData.username} onChange={handleChange} required />
            <br></br>
            
            <label htmlFor='name'>
              Name:
            </label>
            <input type="text" id="name" name="name" placeholder="Enter your first and last name" value={formData.name} onChange={handleChange} required />
            <br></br>
            
            <label htmlFor='email'>
              Email:
              </label>
            <input type="text" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            <br></br>
            
            <label htmlFor='password'>
              Password:
            </label>
            <input type="password" id="password" name="password" placeholder="enter your password" value={formData.password} onChange={handleChange} required/>
            <br></br>
            
            <input type="submit" value="Sign up"></input>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupForm