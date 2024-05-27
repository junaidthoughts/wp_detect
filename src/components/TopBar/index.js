import { DateTime } from 'luxon';
import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className='px-5 flex items-center justify-between h-[100px] w-[calc(100%-100px)] topbar-gradient right-0 top-0 fixed'>
        <div>
            <p className='font-medium text-white text-xl'>
                Dashboard
            </p>
            <p className='text-sm text-white '>
                {
                    DateTime.now().toFormat('EEEE dd LLLL, yyyy')
                }
            </p>
        </div>

        <div className='flex items-center justify-center '>
            <div className='mr-2 h-[40px] w-[40px] rounded-full flex items-center justify-center text-lg font-bold text-blue-500 bg-blue-50'>
                S
            </div>
            <p className='mr-3 font-medium text-white text-lg'>
                User
            </p>
            <FaAngleDown className='text-2xl text-white'/>
        </div>
    </div>
  )
}

export default TopBar