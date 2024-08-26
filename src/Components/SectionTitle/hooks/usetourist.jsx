
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const usetourist = () => {
    const axiosPublic=useAxiosPublic()
//    const[tourist,setTourist]=useState([]);
//    const [loading,setLoading]=useState(true);
//    useEffect(()=> {
//     fetch('http://localhost:5000/tourist')
//     .then(res=>res.json())
//     .then(data=>{
//         setTourist(data);
//         setLoading(false);
//     })
//    },[]) 

const {data:tourist=[],isPending:loading,refetch}=useQuery({
    queryKey:['tourist'],
    queryFn:async()=>{
        const res=await axiosPublic.get('/tourist');
        return res.data;
    }
})

   return [tourist,loading,refetch]
};

export default usetourist;