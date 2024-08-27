import React from 'react';
import useAuth from '../../../../Components/SectionTitle/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Components/SectionTitle/hooks/useAxiosSecure';
import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';

const AdminHome = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();


const {data: stats = {} }=useQuery({
    queryKey:['admin-stats'],
    queryFn: async()=>{
        const res =await axiosSecure.get('/admin-stats');
        return res.data;
    }
})



    return (
        <div>
            <h2 className="text-3xl text-center font-bold ">
            <span>Hello, Welcome </span>


                {
                user?.displayName ? user.displayName : 'Back'


                 }
            </h2>


            <div className="stats shadow gap-3 text-white mt-12 ml-32">
  <div className="stat bg-yellow-400 text-white">
    <div className="stat-figure text-secondary">
    <FaDollarSign className='text-3xl'></FaDollarSign>
    </div>
    <div className="stat-title text-xl font-bold text-white">Revenue</div>
    <div className="stat-value  text-3xl">${stats.revenue}</div>
   
  </div>

  <div className="stat bg-yellow-400">
    <div className="stat-figure text-secondary">
    <FaUsers className='text-3xl'></FaUsers>
    </div>
    <div className="stat-title text-xl font-bold text-white">Users</div>
    <div className="stat-value text-3xl">{stats.users}</div>

  </div>

  <div className="stat bg-yellow-400 text-white">
    <div className="stat-figure text-secondary">
     
    </div>
    <div className="stat-title  text-xl font-bold text-white">Bookings</div>
    <div className="stat-value text-3xl">{stats.bookings}</div>
   
  
  </div>


  <div className="stat bg-yellow-400 text-white">
    <div className="stat-figure text-secondary">
    <FaBook className='text-3xl'></FaBook>
    </div>
    <div className="stat-title text-xl font-bold text-white">Pakages List</div>
    <div className="stat-value text-3xl">{stats.pakageLists}</div>

  </div>







</div>
            
        </div>
    );
};

export default AdminHome;