import React from 'react'
import Navbar from '../Features/DashBoard/UI/Components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='grid grid-cols-[250px_1fr] min-h-screen'>
       
         <Navbar/>
        <Outlet/>
       </div>
    
  )
}

export default MainLayout