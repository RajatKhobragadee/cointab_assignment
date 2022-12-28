import React from 'react'

function Filtration(props) {
  function onFilterValueChanged(event){

    props.filterValueSelected(event.target.value)
     }
  return (
   <>
    <select onChange={onFilterValueChanged}>
      <option>All</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  
   </>
  )
}

export default Filtration

