import React from 'react'
import { IoIosSend } from "react-icons/io";

const Card = ({
  title,
  count,
  countSup,
  icon,
  percent,
  color,
  iconColor
}) => {
  return (
    <div className='bg-white shadow-xl py-3 px-4 rounded-xl'>
      <div className='mb-5  flex items-center justify-between'>
        <p className='text-gray-500'>
          {title}
        </p>

        <div className={`h-[30px] w-[30px] ${iconColor} flex items-center justify-center rounded-full`}>
          {icon}
        </div>



      </div>
      <div className='flex items-center justify-start'>
        <p className='text-3xl font-bold mr-3'>
          {count}
        </p>

        <div className='py-0 px-1 rounded-full bg-red-300 text-[10px] font-bold text-red-950'>
          {countSup}
        </div>
      </div>
      <p className='text-xs text-gray-500'>
        vs. previous month
      </p>

      <div className='mt-5'>

        <div className='flex justify-between items-center'>
          <p className='text-xs font-medium'>
            0%
          </p>
          <p className='text-xs font-medium'>
            100%
          </p>

        </div>
      <div className='h-[2px] w-full rounded-xl bg-gray-200'>
      <div className={`h-full ${color}`}
      style={{
        width: percent
      }}
      >

      </div>
      </div>
      </div>
    </div>
  )
}

export default Card