import React, { useContext } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';


const Login = () => { 
  
 
  const {createUser}=useContext(AuthContext);
  const navigate = useNavigate();
  




  const {
      
    reset,
   
  } = useForm() 



   


  

    const handleLogin=  e=>{ 
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password) 
 
        createUser(email,password)

    .then((userCredential) => {
   
      const user = userCredential.user; 
      console.log(user)
      reset();
      window.location.reload()

      Swal.fire({
        title: 'User Login Successful.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    }); 
     
  })
   
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    }); 

    navigate('/signUp')



   //    create(email, password)
    //     .then(result=>{
    //  const user = result.user;
    //         console.log(user);
    //         Swal.fire({
    //             title: 'User Login Successful.',
    //             showClass: {
    //                 popup: 'animate__animated animate__fadeInDown'
    //             },
    //             hideClass: {
    //                 popup: 'animate__animated animate__fadeOutUp'
    //             }
    //         });
    //         // navigate(from, { replace: true }); 


    //     })   
  
  


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100  md:w-1/2 max-w-sm shadow-2xl">
      <form  onSubmit={handleLogin}className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">

          <input type="submit"   className="btn btn-primary"   value='Login'/>
        </div>
      </form> 
      <p className='px-8'><small>New Here? Create have an account<Link to='/signUp' className=' text-blue-500 font-bold'>Sign Up </Link></small></p>

      <SocialLogin></SocialLogin>
    </div>
  </div>
  
</div>
    );
};

export default Login;