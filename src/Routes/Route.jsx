import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Booking from "../Pages/Booking/Booking";
import TouristLising from "../Pages/TouristListing/TouristLising"; 
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/Cart/AllUsers/AllUsers";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, 


      children:[
        {
            path:'/' ,
            element:<Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>,
        },
        {
          path:'booking/:category',
          element:<Booking></Booking>,
        },
        {
          path:'spotsListing',
          element:<TouristLising></TouristLising>,
        }
      ]
    },

    {
      path:'dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,

      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },

        // admin routes
        {
          path:'users',
          element:<AllUsers></AllUsers>
        }

      ]
    }
  ]);