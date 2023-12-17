import React from 'react'
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout:React.FC = () => {
  return (
    <div className="container mx-auto h-screen w-screen">
      <NavBar />
      <div className="container mx-auto mt-[150px] px-5">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout