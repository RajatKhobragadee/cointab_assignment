
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "./Pagination";
import "./Display.css"
import Filtration from "./Filtration";
import Alluserdetailpage from "./Alluserdetailpage";
const Pages = ({ data }) => {
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //eslint-disable-line
    displayPage,
  ] = usePagination(10, data.length);

  let [newData,setData]=useState(data)
let [filterValue,updateFilterValue]=useState('All')
let filterdPersonList=newData.filter((gender)=>{
if(filterValue==="male"){
  return gender.male===true
}else if(filterValue==="female"){
  return gender.male===false
}else{
  return gender
}
})
function OnFilterValueSelected(filtervalue){
  updateFilterValue(filtervalue)
}

  return (
    <div style={{ marginLeft: "20px" }}>
    <Filtration filterValueSelected={OnFilterValueSelected}></Filtration>
    {/* <Alluserdetailpage newData={filterdPersonList}></Alluserdetailpage> */}
      <h1>User Data</h1>
      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            <div key={data[i].id}>
              <h3 className="list">
                {/* <span className="render">{i + 1}</span>  */}

              
  <table>
  <tr><th> No.</th>
    <th>Gender</th>
    <th> First Name</th>
    <th>Last Name</th>
    <th>city</th>
    <th> country</th>
    <th>email</th>
    <th>picture</th>
  </tr>
  <tr>
  <td>{<span className="render">{i + 1}</span>}</td>
    <td>{data[i].gender}</td>
    <td>{data[i].first}</td>
    <td>{data[i].last}</td>
    <td>{data[i].city}</td>
    <td>{data[i].country}</td>
    <td>{data[i].email}</td>
    <td>{data[i].picture}</td>
  </tr>
 
</table>

                
              </h3>
              <p>{data[i].body}</p>
            </div>
          );
        }
        return displayPosts;
      })()}
      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </div>
  );
};

export default Pages;