import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Components/SectionTitle/hooks/useAxiosPublic';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const SignUp = () => { 

  const axiosPublic=useAxiosPublic();
  const {createUser,updateUserProfile} =useContext(AuthContext);
const navigate=useNavigate();

const locations=useLocation();

  const from=locations.state?.from?.pathname || '/';
  console.log('state in the location', locations.state)



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()  








      const onSubmit= (data) =>{
        console.log(data) 
        createUser(data.email, data.password) 
        .then(result=>{ 
            const loggedUser= result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photo) 
            .then(() => {
              const userInfo={
                name: data.name,
                email:data.email

              }

              
              // console.log('user profile info updated')
              axiosPublic.post('/users',userInfo)
              .then(res=>{
                if(res.data.insertedId){
                
                  reset();
                  window.location.reload() 
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

                }
              }).catch((error) => {
                console.log(error)
               });
               
             navigate(from, { replace: true })
           })

              })
           
           
          
    } 









    return (
      <> 

      <Helmet> Tourism  Management |  SignUp</Helmet>
      
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp  now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}> 
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name",  { required: true })} placeholder="Name" name='name' className="input input-bordered" /> 
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div> 

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="photo" {...register("photo",{ required:true})}  placeholder="Photo Url" name='photo' className="input input-bordered"  /> 
                {errors.photo && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required:true})}  placeholder="email" name='email' className="input input-bordered"  /> 
                {errors.email && <sppan className="text-red-600">This field is required</sppan>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password" ,{ required:true,minLength:6, maxLength:20})}  placeholder="password"  name='password' className="input input-bordered"/> 
                {errors.password?.type  ===  'required' && <span className="text-red-600">Password is Required</span>}
                {errors.password?.type  ===  'minLength' && <span className="text-red-600"> Password  must be  6 characters</span>}
                {errors.password?.type  ===  'maxLength' && <span className="text-red-600">Password  20 characters</span>}
                
              </div>
              <div className="form-control mt-6">
              
                <input type="submit" value='SignUp'  className="btn btn-primary"/>
              </div>
            </form>
            <p className='px-8'><small>Already have an Account<Link to='/login' className=' text-blue-500 font-bold'>Login</Link></small></p>
          <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
      
      
      </>
    );
};

export default SignUp;;

