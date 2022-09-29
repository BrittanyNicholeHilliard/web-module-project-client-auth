import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";



export default function Logout(props){

useEffect(() =>{
    props.logout()
}, [])

if (!localStorage.getItem('token')) {
    return <Navigate to="/" />
  }


}