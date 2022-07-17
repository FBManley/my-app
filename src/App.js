
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MovieList  from './components/MovieList';
import MovieCard from './components/MovieCard';
import MovieForm from './components/MovieForm';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={ <SignUp />}/>
        <Route path="/movielist" element={<MovieList />}/>
        <Route path="/moviecard" element={<MovieCard />}/>
        <Route path="/movie/new" element={ <MovieForm />}/> 
      </Routes>
    </Router>
  );
}

export default App;
