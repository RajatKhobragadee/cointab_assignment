import React from 'react'
import axios from "axios";
function Deletedata() {
    const handleSubmit = async (event) => {
        event.preventDefault();
       try {
        const { data } = await axios.delete("/deleteData")
        window.alert("data deleted sussesfully")
        //navigate("/dashbord")
      
       } catch (error) {
        
       }
      
       
      }
      
      
        return (
         <>
         <div className='delete_data'>
         <h3>Delete All data in single click from data base</h3>
         <button onClick={handleSubmit}>Click me</button>
         </div>
          
         </>
        )
      }

export default Deletedata