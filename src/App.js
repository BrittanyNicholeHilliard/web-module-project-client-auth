import React, {useState} from 'react';
import './App.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios';

import LoginForm from './LoginForm';
import FriendsList from './FriendsList';


function App() {

  const navigate = useNavigate()

  const [friendsList, setFriendsList] = useState([])

  const login = ({username, password}) => {
    axios.post('http://localhost:9000/api/login', { username, password })
    .then(res => {
      const {token} = res.data
      localStorage.setItem('token', token)
      navigate('/friendslist')
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
    axios({
      method: 'get',
      url: 'http://localhost:9000/api/friends', 
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      const friends = res.data
      console.log(res)
      setFriendsList(friends)
      console.log(`friends:`, friendsList)
    }).catch((err) => {
      console.log(err)
    })

  }

  const searchFriend = () => {

  }

  const addFriend = () => {

  }


  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <nav>
        <div><NavLink id="loginScreen" to="/">Login</NavLink></div>
        <div><NavLink id="loginScreen" to="/FriendsList">FriendsList</NavLink></div>
        <div><NavLink id="logoutScreen" to="/">Logout</NavLink></div>
      </nav>
      <Routes>
        <Route path="/" element={<LoginForm login={login} />} />
        <Route path="/friendslist" element={<FriendsList friendsList={friendsList} getFriends={getFriends}/>} />
        <Route path="/login" element={<LoginForm login={login}/>} />
      </Routes>
    </div>
  );
}

export default App;
