import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contract from './components/Contract/Contract';
import Users from './components/Users/Users';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Posts from './components/Posts/Posts';
import Postduplicate from './components/Postal/Postduplicate';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: 'this is error page',
    children:[
      {path:"/About",
      element:<About></About>
    },
    {
     path:"/Contract",
     element:<Contract></Contract>
    },
    {
      path:"/users",
      loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
     path:"/user/:userId",
     loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
     element:<ShowDetails></ShowDetails>
    },
    {
      path:"/posts",
      loader:()=>fetch("https://jsonplaceholder.typicode.com/posts"),
      element:<Posts></Posts>
    },
    {
      Path:"/postal/:id",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      element: <Postduplicate />
    },

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
