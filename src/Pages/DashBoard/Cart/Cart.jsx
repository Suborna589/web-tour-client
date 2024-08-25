import { FaTrashAlt } from "react-icons/fa";
import userCart from "../../../Components/SectionTitle/hooks/userCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/SectionTitle/hooks/useAxiosSecure";


const Cart = () => {
    const [cart,refetch]=userCart();
    const axiosSecure=useAxiosSecure();


        const totalPrice = cart.reduce( (  total , tourist) =>total + Number(tourist.average_cost),0);
    
const handleDelete= id=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
     
        axiosSecure.delete(`/carts/${id}`)
        .then(res=>{
           if(res.data.deletedCount>0){
            refetch()
                 Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });


           }
          
        })
        }
      });


}


       
    

    return (
        <div>
<div className="flex justify-evenly mb-8">
<h2 className="text-4xl">Tourist:{cart.length}</h2>
<h2 className="text-4xl">Total AvarestCost:{totalPrice}</h2>
<button  className="btn btn-primary">Pay</button>
</div>

<div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Tourist Spot Name</th>
        <th>Averest Cost</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((tourist,index)=>  <tr key={tourist._id}>
            <th>
             {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={tourist.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
             
              </div>
            </td>
            <td>
             {tourist.tourist_spot_name}
            </td>
            <td>
                ${tourist.average_cost}
            </td>
            <th>
              <button onClick={()=> handleDelete(tourist._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-500"></FaTrashAlt></button>
            </th>
          </tr>)
      }

     
    
     
    </tbody>
  
  </table>
</div>
            
        </div>
    );
};

export default Cart;