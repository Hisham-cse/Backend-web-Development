import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/></>
    },
    {
      path:'/login',
      element:<><Navbar/><Login/></>
    },
    {
      path:'/about',
      element:<><Navbar/><About/></>
    },
    {
      path:'/user/:username',
      element:<><Navbar/><User/></>
    },
])
  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  )
}

export default App
