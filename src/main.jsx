import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import AllCampaign from './components/AllCampaign';
import NewCampaign from './components/NewCampaign';
import MyCampaign from './components/MyCampaign';
import MyDonation from './components/MyDonation';
import Login from './components/Login';
import Register from './components/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'/allCampaign',
        element:<AllCampaign />,
      },
      {
        path:'/newCampaign',
        element:<NewCampaign />,
      },
      {
        path:'/myCampaign',
        element:<MyCampaign />,
      },
      {
        path:'/myDonation',
        element:<MyDonation />,
      },
      {
        path:'/login',
        element:<Login />,
      },
      {
        path:'/register',
        element:<Register />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
)
