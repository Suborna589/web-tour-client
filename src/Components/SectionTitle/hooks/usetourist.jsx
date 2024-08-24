import { useEffect, useState } from "react";



const usetourist = () => {
   const[tourist,setTourist]=useState([]);
   const [loading,setLoading]=useState(true);
   useEffect(()=>{
    fetch('http://localhost:5000/tourist')
    .then(res=>res.json())
    .then(data=>{
        setTourist(data);
        setLoading(false);
    })
   },[]) 
   return [tourist,loading]
};

export default usetourist;