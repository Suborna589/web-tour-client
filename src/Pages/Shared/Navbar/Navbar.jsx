import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { MdLogout } from 'react-icons/md';
import logo2 from '../../../assets/logo2.jpg'
import { FaShoppingCart } from 'react-icons/fa';
import userCart from '../../../Components/SectionTitle/hooks/userCart';


const Navbar = () => {  

  const {user,logOut}=useContext(AuthContext);
  const [cart]=userCart()

  const handleLogOut =()=>{ 
    logOut() 
    .then(()=>{
    
    }) 
    .catch(error => console.log(error))

  }

  

    const navOptions= <> 
              
             
              <li><Link to='/'>Home</Link></li>
        <li>
        <Link to='/mylist'>My List</Link>
        </li>
        <li>
        <Link to='/booking/beaches'>Booking</Link>
        </li>
        <li>
        <Link to='/spotsListing'>Tourist Spots Listing</Link>
        </li>


  <li>
<Link  to='/dashboard/cart'>

<button className="flex gap-3">
<FaShoppingCart className='text-xl text-white'></FaShoppingCart>
  <div className="badge badge-secondary ">+{cart.length}</div>
</button>
</Link>
  </li>
  
       
        {
          user? <> 



<div>
<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn  btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  src= {user?.photoURL||"https://i.ibb.co/QD79yph/image1-png.jpg" }/>   

  
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 text-center rounded-box w-52">
        <li>
           {/* <a> <FaUserCheck className='ml-16 text-black text-2xl'/></a> */}
           <img   className="btn  btn-ghost btn-circle avatar w-20 ml-12 rounded-full " src= {user?.photoURL||"https://i.ibb.co/QD79yph/image1-png.jpg" }/>  
          <a className="pl-14 text-black">
            User Profile
          </a>
        </li>
        <li><button className="btn   text-black"> {user?.displayName||'name not found'}</button></li>
        <button onClick={handleLogOut} className="btn uppercase  text-black"><><MdLogout className='text-xl'/></>Logout</button>
      </ul>
    </div> 
    </div>

         
          
          </>  : <> 
           <li><Link  to='/login'>Login</Link></li> 
          
          </>
        }
    
    </>
    return (
        <div> 

<div className="navbar  mx-auto fixed z-10 bg-opacity-50 bg-black text-white max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navOptions}
      </ul>
    </div>
    <div><Link to='/'><img className='w-14 h-14 rounded-2xl'src={logo2} /></Link></div>
            <div className=" pl-0 text-xl space-x-0"><span className='text-[#1ddb14] font-bold text-4xl mr-18'>TOUR </span><span className='text-[orangered] font-bold text-4xl'>SPHERE</span></div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-black text-white">Get Started</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;