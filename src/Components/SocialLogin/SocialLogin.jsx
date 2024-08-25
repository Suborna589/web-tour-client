import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../SectionTitle/hooks/useAuth';
import useAxiosPublic from '../SectionTitle/hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const{googleLogin}=useAuth() 
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate()

 
     const handleSocial=()=>{ 
         googleLogin() 
         .then((result) => {
        console.log(result.user) 
        const userInfo={
            email:result.user?.email,
            name:result.user?.displayName
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
            console.log(res.data);
            navigate('/');
        })
            
          }).catch((error) => {
            
            const errorCode = error.code;
       
       
      } )
    }

    return (
        <div className=' text-center mb-8'>
            <div className='divider'></div>
            <div>
            <button onClick={handleSocial}  className="btn text-xl text-yellow-400 uppercase font-bold">
                <FaGoogle className='mr-2 text-xl '></FaGoogle>
 
 Google
</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;