
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Components/SectionTitle/hooks/useAuth';

const PrivateRoute = ({children}) => { 
  const {user,loading}=useAuth();
  const locations=useLocation(); 

if(loading){
  return <progress className="progress w-56"></progress> 
 

}


  if(user){
    return children;
  }
  return <Navigate  to='/login' state={{from:locations}}></Navigate>
};

export default PrivateRoute;