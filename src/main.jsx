import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import JobDetals from './Components/JobDetails/JobDetals.jsx';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/jobs',
        element:<FeaturedJobs/>
      },
      {
        path:'/applied',
        element: <AppliedJobs/>,
      },
      {
        path: '/job/:id',
        element:<JobDetals></JobDetals>,
        loader:()=>fetch('/data/jobs.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
