import React, { useState, useEffect } from 'react'
import { baseUrl } from './Globals';
import { useNavigate } from 'react-router-dom'

const Login = ({ loginUser}) => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([])

  const navigate = useNavigate(0);

  const handleChange = e => {
    setUsername(e.target.value);

  }

  const handleSubmit = e => {
    e.preventDefault()

    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    if(user) {
      loginUser(user);
      navigate("/recipecard")
    }

  }

  useEffect(() => {
    fetch(baseUrl + "/users")
    .then(resp => resp.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" onChange={handleChange} value={username}></input>
      </div>
      <input type="submit" value="Login"></input>
    </form>
    </div>
  )
}

export default Login