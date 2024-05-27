import React, { useState } from 'react'
import { MdHistory } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaBook } from "react-icons/fa6";

const Header = () => {
    const [selected, setSelected] = useState(0)
    return (
            <div className='grid grid-cols-4 gap-0'>

                <div onClick={() => setSelected(0)} className={`py-4 px-4 space-x-2 flex items-center justify-center  ${selected === 0 ? "bg-[#d8d6e7] rounded-xl" : "bg-[#ffe2c1]"}`}>
                    <MdHistory className='text-3xl'/>
                    <p className='text-lg font-medium'>
                    HISTORY
                    </p>
                </div>
                <div onClick={() => setSelected(1)} className={`py-4 px-4 space-x-2 flex items-center justify-center  ${selected === 1 ? "bg-[#d8d6e7] rounded-xl" : "bg-[#ffe2c1]"}`}>
                    <IoIosNotificationsOutline className='text-3xl'/>
                    <p className='text-lg font-medium'>
                    LATEST ALERTS
                    </p>
                </div>
                <div onClick={() => setSelected(2)} className={`py-4 px-4 space-x-2 flex items-center justify-center  ${selected === 2 ? "bg-[#d8d6e7] rounded-xl" : "bg-[#ffe2c1]"}`}>
                    <CiMail className='text-3xl'/>
                    <p className='text-lg font-medium'>
                    RESPONSES
                    </p>
                </div>
                <div onClick={() => setSelected(3)} className={`py-4 px-4 space-x-2 flex items-center justify-center  ${selected === 3 ? "bg-[#d8d6e7] rounded-xl" : "bg-[#ffe2c1]"}`}>
                    <FaBook className='text-3xl'/>
                    <p className='text-lg font-medium'>
                    TOTAL: 200
                    </p>
                </div>

            </div>            
    )
}

export default Header