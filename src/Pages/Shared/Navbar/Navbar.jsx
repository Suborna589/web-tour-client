import React from 'react'; 
import { Link } from 'react-router-dom';
// import logo2 from '../../../../../public/logo2.jpg'
// import { Link } from 'react-router-dom';

const Navbar = () => { 

    const navOptions= <> 
      <li><Link to='/'>Home</Link></li>
        <li>
        <Link to='/mylist'>MY List</Link>
        </li>
        <li><Link  to='/login'>Login</Link></li>
    
    </>
    return (
        <div> 

<div className="navbar  fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
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
    {/* <div><Link to='/'><img className='w-14 h-14 rounded-2xl'src={logo2} /></Link></div> */}
            <div className=" pl-0 text-xl space-x-0"><span className='text-[#1ddb14] font-bold text-4xl mr-18'>TOUR </span><span className='text-[orangered] font-bold text-4xl'>SPHERE</span></div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;