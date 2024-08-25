import React from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import userCart from '../hooks/userCart';


const SpotCard = ({tourist}) => {
    const {image,description,tourist_spot_name,location,average_cost,_id}=tourist;  
    const {user}=useAuth();
    const navigate=useNavigate();
    const locations =useLocation();
    const axiosSecure=useAxiosSecure();
    const [,refetch]=userCart()



    const handleAddToCart= ()=>{
     if(user && user.email){
        // send cart tourist to the database  
        // console.log(user.email,spot);
        const cartItourist={
            touristId: _id,
            email:user.email,
            image,
            tourist_spot_name,
            average_cost

        } 
       axiosSecure.post('/carts', cartItourist)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${tourist_spot_name} added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()

            }
        })

     } 
     else{
        Swal.fire({
            title: "You are not Logged In",
            text: "Please login to add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/signUp',{state:{from:locations}})
            }
          });
          
     }

    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
             />
        </figure> 
        <p className=' absolute bg-orange-600 text-white right-0 mr-4 mt-4 px-4'>${average_cost}</p>
        <div className="card-body">
          <h2 className="card-title">{tourist_spot_name}</h2>
          <p>{location}</p> 
           <p>{description}</p>
         
          <div className="card-actions justify-center">
            {/* <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button> */}
            <button
                        onClick={handleAddToCart}
                        className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400 mt-4"
                    >Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default SpotCard;