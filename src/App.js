import React, {useState} from 'react';
import './App.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm';
import axios from 'axios';

function App() {

  const navigate = useNavigate()


  const login = ({username, password}) => {
    axios.post('http://localhost:9000/api/login', { username, password })
    .then(res => {
      const {token} = res.data
      localStorage.setItem('token', token)
      console.log(res)
    })
    .catch(err => {
      console.log({err})
    })

  }

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const getFriends = () => {

  }

  const searchFriend = () => {

  }

  const addFriend = () => {

  }


  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <nav>
        <NavLink id="loginScreen" to="/">Login</NavLink>
        <NavLink id="logoutScreen" to="/">Logout</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<LoginForm login={login} />} />
        <Route path="/login" element={<LoginForm login={login}/>} />
      </Routes>
    </div>
  );
}

export default App;
