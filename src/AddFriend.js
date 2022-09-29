import React, { useEffect, useState } from "react";
import {Navigate} from 'react-router-dom'

const initialValues ={
    name: '', 
    age: '', 
    email: ''
}
export default function AddFriend(props) {

    if (!localStorage.getItem('token')) {
        return <Navigate to="/" />
      }


 const [values, setValues] = useState(initialValues)
    const {addFriend} = props;

    const onChange = evt => {
        const {name, value} = evt.target
        setValues({...values, [name]: value})
      }


      const onSubmit = evt =>  {
        evt.preventDefault()
        addFriend(values)
      }
    return(
        
        <div className="add-friend-form">
            <form label="add-friend" onSubmit={onSubmit}>
                <div><input type='text' placeholder='name' name="name" value={values.name} onChange={onChange}/></div>
                <div><input type='text' placeholder='age' name="age" value={values.age} onChange={onChange}/></div>
                <div><input type='text' placeholder='email' name="email" value={values.email} onChange={onChange}/></div>
                <button type="submit">Add Friend</button>
            </form> 
        </div>

    )
}