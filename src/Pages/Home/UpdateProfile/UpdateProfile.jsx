import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';



const UpdateProfile = () => {  

    const {logOut,user}=useContext(AuthContext) 
  
    return (
       

<div> 
  {
      user ? 
  <div>

      <div className="pt-20 mt-20 h-[400px] p-2 shadow-xl bg-[#E0FFFF] rounded-box w-[600px] text-center ml-96">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-24  rounded-full">
          <img className='' src= {user?.photoURL||"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" }/>   

  
        </div>
      </div>
      <ul tabIndex={0} className=" ">
        <li>
          <a className="justify-between text-xl ">
          Update profile
          </a>
        </li>
        <li><button className="btn  btn-ghost"> {user?.displayName|| 'name not found'}</button></li>
        <li><button onClick={logOut} className='btn btn-ghost btn-warning font-bold rounded-xl mr-6'>LOGOUT</button></li>
      </ul>
    </div> 
    </div> 
    
   
    
 
       
        :
        <div>
        <Link  to='/login' className="btn btn-outline btn-warning font-bold rounded-xl mr-6">LOGIN</Link>  
        <Link  to='/signup' className="btn btn-outline btn-warning font-bold rounded-xl mr-6">SIGNUP</Link>   
        </div>

      
      }
  

  

  </div>
            
       
    );
};

export default UpdateProfile;