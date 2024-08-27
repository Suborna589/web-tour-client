import {  FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import userCart from "../Components/SectionTitle/hooks/userCart";
import useAdmin from "../Components/SectionTitle/hooks/useAdmin";


const DashBoard = () => {
    const [cart]=userCart()
    const [isAdmin]=useAdmin()
    return (
        <div className="flex ">

{/* //side bar */}
           <div className="w-64 min-h-screen bg-orange-400 ">
            <ul className="tourist p-7 ">

          {

            isAdmin ?

            <>
              <li>
            <NavLink to='/dashboard/adminHome' className='flex gap-3 mb-4'>
            <FaHome className="text-xl mt-1 "></FaHome>Admin Home</NavLink>
            </li>

           <li>
            <NavLink to='/dashboard/addSpot' className='flex gap-3 text-white  mb-4 '>
            <FaUtensils className="text-xl mt-1"></FaUtensils>Add Tourist Spot</NavLink>
            </li>


           <li>
            <NavLink to='/dashboard/manageTourist' className='flex gap-3 text-white   mb-4'>
            <FaList className="text-xl  mt-1"></FaList>Manage Tourist Spot</NavLink>
            </li>
           
           
           <li>
            <NavLink to='/dashboard/bookings' className='flex gap-3 text-white   mb-4'>
            <FaBook className="text-xl  mt-1"></FaBook>Manage Booking</NavLink>
            </li>
       
       
           <li>
            <NavLink to='/dashboard/users' className='flex gap-3 text-white  mb-4'>               
            <FaUsers className="text-xl mt-1 "></FaUsers>All Users</NavLink>
            </li>

             </> 
           
                
                :



            <>
              <li>
            <NavLink to='/dashboard/userHome' className='flex gap-3 mb-4'>
            <FaHome className="text-xl mt-1 "></FaHome>User Home</NavLink>
            </li>
            
            <li>
            <NavLink to='/dashboard/history' className='flex gap-3 text-white  mb-4 '>
            <FaCalendar className="text-xl mt-1"></FaCalendar>Payment History</NavLink>
            </li>
        
            <li>
            <NavLink to='/dashboard/paymentHistory' className='flex gap-3 text-white   mb-4'>
            <FaBook className="text-xl  mt-1"></FaBook>Payment Real History</NavLink>
            </li>
           
           <li>
            <NavLink to='/dashboard/cart' className='flex gap-3 text-white  mb-4'>               
            <FaList className="text-xl mt-1 "></FaList>My Cart[{cart.length}]</NavLink>
            </li>

            </>

          }



               
                <div className="divider"></div>
    
                <li>
            <NavLink to='/' className='flex gap-3 '>
            <FaHome className="text-xl mt-1 "></FaHome> Home</NavLink>
            </li>


            <li>   
            <NavLink to='/booking/beaches' className='flex gap-3 mt-4   mb-4'>
            <FaSearch className="text-xl mt-1 "></FaSearch>Tourist Spot</NavLink>
            </li>

            <li>
            <NavLink to='/booking/contact' className='flex gap-3 mt-4   mb-4'>
            <FaEnvelope className="text-xl mt-1 "></FaEnvelope>Contact</NavLink>
            </li>
                
            </ul>

            </div> 
            {/* content */}
            <div  className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;