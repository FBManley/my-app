
import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { baseUrl, headers } from './components/Globals'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RecipeList  from './components/RecipeList';
import RecipeCard from './components/RecipeCard';
import RecipeForm from './components/RecipeForm';



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true);
    localStorage.setItem('user_id', user.id)
  }

  const logoutUser = () => {
    setCurrentUser({});
    setLoggedIn(false)
    localStorage.removeItem('user_id');
  }
  
  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if(userId && !loggedIn) {
      fetch(baseUrl + '/users/' + userId)
      .then(resp => resp.json())
      .then(data => loginUser(data))
    }
  }, [])
  
  return (
    <Router>
      <NavBar loggedIn={ loggedIn } logoutUser= { logoutUser }/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login loginUser={ loginUser }/>}/>
        <Route path="/signup" element={ <SignUp loginUser={ loginUser }/>}/>
        <Route path="/recipelist" element={<RecipeList />}/>
        <Route path="/recipecard" element={<RecipeCard />}/>
        <Route path="/recipe/new" element={ <RecipeForm />}/> 
      </Routes>
    </Router>
  );
}

export default App;
