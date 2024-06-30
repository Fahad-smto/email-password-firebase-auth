 
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import React from 'react';
import Root from './component/Root/Root';
import HeroRegister from './component/HeroRegister/HeroRegister';


const router = createBrowserRouter([
  {
    path: "/",
     element :<Root></Root>,
     children :[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/heroRegister',
        element:<HeroRegister></HeroRegister>
      }
     ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
