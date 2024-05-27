import React from 'react'
import { TiCogOutline } from "react-icons/ti";
import { RxDashboard } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 bottom-0 w-[100px] sidebar-gradient py-5'>
        <img src="/images/logo.png" className='w-[70px] mx-auto'/>

        {/* links container */}
        <div className='mt-16 space-y-5'>
            <Link to="/" className='transition-all hover:bg-gray-400 bg-gray-400 mx-auto h-[50px] w-[50px] flex items-center justify-center'>
            <TiCogOutline  className='text-2xl text-[#003465]'/>
            </Link>
            <Link to="/" className='transition-all hover:bg-gray-400 mx-auto h-[50px] w-[50px] flex items-center justify-center'>
            <RxDashboard className='text-2xl text-[#003465]'/>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar