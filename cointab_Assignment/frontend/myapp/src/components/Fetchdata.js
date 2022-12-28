import React from 'react'
import axios from "axios";
import "./Display.css"
function Fetchdata() {
  const handleSubmit = async (event) => {
  event.preventDefault();
 try {
  const { data } = await axios.get("/getdata")
 
  window.alert("data added sussesfully")
  //navigate("/dashbord")

 } catch (error) {
  
 }

 
}


  return (
   <>
   <div className='Add_data'>
   <h3>Add Data In Data Base with Bulk</h3>
   <button onClick={handleSubmit}>Click</button>
   </div>
   
   </>
  )
}

export default Fetchdata