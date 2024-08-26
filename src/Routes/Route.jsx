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
import AddTouristSpot from "../Pages/DashBoard/Cart/AddTouristSpot/AddTouristSpot";
import AdminRoute from "../Routes/AdminRoute";
import ManageTouristSpot from "../Pages/DashBoard/Cart/ManageTouristSpot/ManageTouristSpot";
import UpdateTourstList from "../Pages/DashBoard/Cart/UpdateTouristSpot/UpdateTourstList";



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
        // normal user route

        {
          path:'cart',
          element:<Cart></Cart>
        },


        // admin routes

      {
        path:'addSpot',
        element:<AdminRoute><AddTouristSpot></AddTouristSpot></AdminRoute>,
      },

      {
        path:'manageTourist',
        element:<AdminRoute><ManageTouristSpot></ManageTouristSpot></AdminRoute>

      },
      {
        path:'updateList/:id',
        element:<AdminRoute><UpdateTourstList></UpdateTourstList></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:5000/tourist/${params.id}`)


      },


        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }

      ]
    }
  ]);