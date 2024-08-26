import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import usetourist from '../../../../Components/SectionTitle/hooks/usetourist';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Components/SectionTitle/hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageTouristSpot = () => {
    const [tourist, ,refetch]=usetourist();
    const axiosSecure=useAxiosSecure();

  const  handleDeleteTourist= (list)=>{
    
   
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {

    const res= await axiosSecure.delete(`/tourist/${list._id}`)
    // console.log(res.data);
    if(res.data.deletedCount>0){
        refetch()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${list.tourist_spot_name} has been deleted`,
            showConfirmButton: false,
            timer: 1500
          });

    }
 
  }
});

  }


    return (
       
            <div>
            <SectionTitle heading="Manage All  List"></SectionTitle>



            <div>

            <div className="overflow-x-auto">
  <table className="table w-full ">
    {/* head */}
    <thead className='bg-orange-300 text-sm'>
      <tr>
        <th>
        
        </th>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Tourist Spot Name</th>
        <th>Average Cost</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        tourist.map((list,index)=>

            <tr> key={list._id}
            <td>
            {index +1}
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={list.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              
              </div>
            </td>
            {list.tourist_spot_name}
            <td>
            ${list.average_cost}
            </td>
            <td>
           <Link to={`/dashboard/updateList/${list._id}`}>
           
           <button  className="btn bg-orange-500  btn-sm">
                
                <FaEdit className=" text-white text-lg"></FaEdit>
               
                </button>
           </Link>
            </td>
            <td>
            <button onClick={()=> handleDeleteTourist(list)} className="btn bg-red-500  btn-sm">
                <FaTrashAlt className="text-white text-lg"></FaTrashAlt>
                </button>            </td>
          </tr>
        )
      }
    
  
    
    </tbody>
  </table>
</div>



            
            </div>



        </div>

       
    );
};

export default ManageTouristSpot;