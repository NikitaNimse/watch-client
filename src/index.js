import React from 'react';
import ReactDOM from 'react-dom/client';

import{
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom"
 import Home from './views/Home/Home';
 import Addwatch from './views/AddWatch/AddWatch'
 import Updatewatch from './views/UpdateWatch/UpdateWatch'

 const root = ReactDOM.createRoot(document.getElementById("root"))
 const router =  createBrowserRouter([
     {
         path:"/",
         element:<Home/>
     },
     {
      path:"/add",
      element:< Addwatch/>
  },
  {
    path:"/update/:id",
    element:<Updatewatch/>
},
     {
      path:"*",
      element:<> 404 not found</>
  }
])
root.render(<RouterProvider router={router}/>)
