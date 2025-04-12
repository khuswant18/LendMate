import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home/Home'
import OptionSection from './Pages/OptionSection/OptionSection'
import BorrowerSection from './Pages/BorroweSection/BorrowerSection'
import LenderSection from './Pages/LenderSection/LenderSection'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'option',
        element: <OptionSection />,
      },
      {
        path: 'borrower', 
        element: <BorrowerSection/>
      },
      {
        path: 'lender', 
        element: <LenderSection/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
