import React, {useState} from 'react';
import './App.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios';

import LoginForm from './LoginForm';
import FriendsList from './FriendsList';
import AddFriend from './AddFriend';
import Logout from './Logout';
import SearchFriend from './SearchFriend';



function App() {

  const navigate = useNavigate()

  const [friendsList, setFriendsList] = useState([])
  const [friend, setFriend] = useState({})

    


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
    }).catch((err) => {
      console.log(err)
    })

  }

  
  const addFriend = (friend) => {
    axios({
      method: 'post', 
      url: 'http://localhost:9000/api/friends',
      headers: {
        Authorization: localStorage.getItem('token')
      }, 
      data: friend
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const searchFriend = (friend) => {
    axios({
      method: 'get', 
      url: `http://localhost:9000/api/friends/${friend}`,
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      setFriend(res)
    }).catch((err) => {
      console.log(err)
    })

  }



  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <nav>
        <div><NavLink id="loginScreen" to="/">Login</NavLink></div>
        <div><NavLink id="loginScreen" to="/FriendsList">FriendsList</NavLink></div>
        <div><NavLink id="addFriend" to="/AddFriend">Add Friend</NavLink></div>
        <div><NavLink id="searchFriend" to="/SearchFriend">Search Friend</NavLink></div>
        <div><NavLink id="logoutScreen" to="/Logout">Logout</NavLink></div>
      </nav>
      <Routes>
        <Route path="/" element={<LoginForm login={login}  />} />
        <Route path="/friendslist" element={<FriendsList friendsList={friendsList} getFriends={getFriends}/>} />
        <Route path="/addfriend" element={<AddFriend  addFriend={addFriend} />} />
        <Route path="/searchfriend" element={<SearchFriend friendsList={friendsList} friend={friend} searchFriend={searchFriend}/>} />
        <Route path="/login" element={<LoginForm login={login}/>} />
        <Route path="/logout" element={<Logout logout={logout}/>} />
      </Routes>
    </div>
  );
}

export default App;
