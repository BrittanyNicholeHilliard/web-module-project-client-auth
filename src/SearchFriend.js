
import React, { useState, useEffect } from "react";


export default function searchFriend(props){

    const [value, setValue] = useState({})
    

    const {friendsList, searchFriend, friend} = props;

    useEffect(() =>{
        setValue('')
    }, [props.friendsList])

    const onSubmit = evt => {
        evt.preventDefault()
        searchFriend(value)

    }

    const onChange = evt => {
        const {value} = evt.target
        setValue(value)
      }

    return (
        <form label='search-friend-form'>
            <input type='text' name='search' value={value} placeholder="search" onChange={onChange}/>
            <button onClick={onSubmit}>Search</button>
        </form>

    )
}