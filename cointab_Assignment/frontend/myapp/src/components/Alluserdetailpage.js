
import { useState, useEffect } from "react";
import Pages from "./Pages";
import Filtration from "./Filtration";
function Alluserdetailpage() {
  const [data, setData] = useState([]);
  const [filterd,setFilterd]=useState([])
  const [activeGenre,setActiveGenre]=useState(0)
  // const[flag,setFlag]=useState(true)
  let flag=true
  //getting posts
  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch("/getAllUserDetails");
      const data = await res.json();
      setData(data);
      setFilterd(data)
      console.log(data);
    };
    paginationFunc();
  }, []);


  return (
    <>


    {flag==true? data && data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>:
    window.alert(" request is ongoing- Try later")}
     {flag=false}</>
  );
}

export default Alluserdetailpage;