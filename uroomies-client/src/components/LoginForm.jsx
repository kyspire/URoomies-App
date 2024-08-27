import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'


//profilepicture as null for now becayse idk how to import it
const LoginForm = () => {
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
      .post('http://localhost:7776/login', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName:
        <input type="text" name="username" value={formData.username} onChange={handleChange}/>
      </label>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>
      <label>
        email:
        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
      </label>
      <label>
        password:
        <input type="text" name="password" value={formData.password} onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default LoginForm