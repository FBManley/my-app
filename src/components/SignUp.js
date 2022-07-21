import React, { useState } from 'react'
import { baseUrl, headers } from './Globals'
import { useNavigate } from "react-router-dom";

const SignUp = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault()
    fetch(baseUrl + '/users', {
      method: "POST",
      headers,
      body: JSON.stringify({ username })
    })
    .then(resp => resp.json())
    .then(data => {
      loginUser(data);
      navigate('/RecipeList');
    })
  }

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={ handleSubmit }>
        <label>Username:</label>
        <input 
        type="text" 
        name="username" 
        value={ username } 
        onChange={e => setUsername( e.target.value )}>  
        </input>
        <input type="submit" name="Create Account"></input>
      </form>
    </div>
  )
}

export default SignUp