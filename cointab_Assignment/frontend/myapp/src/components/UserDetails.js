import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Display.css"
function UserDetails() {
    const navigate = useNavigate();
  const  handelclick=()=>{
navigate("./all_user_Details")
  }
  return (
<>
<div className='get_user_details'>
<h3>Get All User Details</h3>
    <button onClick={handelclick}>Click me</button>
</div>
    

</>  )
}

export default UserDetails