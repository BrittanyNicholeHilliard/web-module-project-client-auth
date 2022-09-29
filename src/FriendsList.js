import React, {useEffect} from "react";
import {Navigate} from 'react-router-dom'


export default function FriendsList(props) {

    if (!localStorage.getItem('token')) {
        return <Navigate to="/" />
      }

    const {getFriends} = props;
    

    useEffect(() => {
        getFriends();
    }, [])




        return (
            <div>
                <h2>Friends List</h2>
                <ul>
                    {
                        props.friendsList.map(friend => {
                            return <div key={friend.id}>{friend.name} - {friend.age} - {friend.email}</div>
                        })
                    }
                </ul>
                
                
            </div>
        )
    


}