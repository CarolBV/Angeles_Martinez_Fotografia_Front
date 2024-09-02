import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Logo from './components/navbar/Logo'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'


createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}/>
   
 
)
