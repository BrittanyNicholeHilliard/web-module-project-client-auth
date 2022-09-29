import React, {useEffect} from "react";


export default function FriendsList(props) {


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
                            return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
                        })
                    }
                </ul>
                
                
            </div>
        )
    


}