import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({  loggedIn, logoutUser }) => {

  const logout = e => {
    e.preventDefault();

    logoutUser();
  }

  const loggedInLinks = () => {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipelist">Recipes</Link></li>
        <li><Link to="/recipes/new">Create Recipe</Link></li>
        <li>Logout</li>
      </ul>
    )
  }
  const loggedOutLinks = () => {
    return (
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/signup">Create Account</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><a href='#' onClick={ logout }>Logout</a></li>
      </ul>
    )
  }
  return (
    <div>RecipeCentral
      { loggedIn ? loggedInLinks() : loggedOutLinks() }
    </div>
  )
}

export default NavBar