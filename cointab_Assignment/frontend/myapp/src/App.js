import logo from './logo.svg';
import './App.css';
import Fetchdata from "./components/Fetchdata"
import Deletedata from './components/Deletedata';
import UserDetails from './components/UserDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alluserdetailpage from './components/Alluserdetailpage';
function App() {
  return (
    <>
   
     
     


      <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<div><Fetchdata/> <Deletedata/> <UserDetails/></div>} />
          <Route path="all_user_Details" element={<Alluserdetailpage/> } /> 
          
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
    </>
  )
  }
export default App;
