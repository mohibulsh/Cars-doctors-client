import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home/Home";
import Login from "../Home/Login/Login";
import SignUp from "../Home/Home/SignUp/SignUp";
import CheckOut from "../Home/ChakOut/CheckOut";
import Bookings from "../Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/checkout/:id',
          element:<CheckOut/>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
         element:<PrivateRoute><Bookings></Bookings></PrivateRoute>  
        }
      ]
    },
  ]);
  export default router