import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout' 
import Home from './Pages/Home/Home' 
import OptionSection from './Pages/OptionSection/OptionSection'
import BorrowerSection from './Pages/BorrowerSection/BorrowerSection'
import LenderSection from './Pages/LenderSection/LenderSection'
import BorrowerCards from './Pages/BorrowerCards/BorrowerCard'
import BorrowerProfile from './Pages/BorrowerProfile/BorrowerProfile'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'

  
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>, 
    children: [
      {
        index: ' ', 
        element: <Home />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'option',
        element: <OptionSection />,
      },
      {
        path: 'borrower',
        element: <BorrowerSection />,
      },
      {
        path: 'lender',
        element: <LenderSection />,
      },
      {
        path:'borrowerCard',
        element:<BorrowerCards/>
      },
      {
        path:'borrowerProfile',
        element:<BorrowerProfile/>
      }
      
      
    ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
