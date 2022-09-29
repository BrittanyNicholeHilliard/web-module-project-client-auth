
import React, { useState, useEffect } from "react";


export default function searchFriend(props){

    const [value, setValue] = useState({})
    

    const {getFriends, friendsList, searchFriend, friend} = props;

    useEffect(() =>{
        getFriends();
        setValue('')
    }, [])

    const onSubmit = evt => {
        evt.preventDefault()
        searchFriend(value)
    }

    const onChange = evt => {
        const {value} = evt.target
        setValue(value)
      }

    return (<div className='search-friend-container'>
        <form label='search-friend-form'>
            <input type='text' name='search' value={value} placeholder="search" onChange={onChange}/>
            <button onClick={onSubmit}>Search</button>
        </form>

        <div className="friend-container">
            <p>{friend.name}</p>
        </div>
            </div>
    )
}