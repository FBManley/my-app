
import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RecipeList  from './components/RecipeList';
import RecipeCard from './components/RecipeCard';
import RecipeForm from './components/RecipeForm';



function App() {

  
  return (
    <Router>
      <NavBar loggedIn={ loggedIn } logoutUser= { logoutUser }/>
      <Routes>
        <Route exact path="/" component={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={ <SignUp />}/>
        <Route exact path="/recipelist" element={<RecipeList />}/>
        <Route exact path="/recipecard" element={<RecipeCard />}/>
        <Route exact path="/recipe/new" element={ <RecipeForm />}/> 
      </Routes>
    </Router>
  );
}

export default App;
