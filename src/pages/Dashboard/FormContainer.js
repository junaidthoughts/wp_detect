import React from 'react'

const FormContainer = () => {
    const data = [
        {
            label: "Weapon Type",
            placeholder: "Weapon Type"
        },
        {
            label: "Person CNIC",
            placeholder: "CNIC"
        },
        {
            label: "Camera IP/Site",
            placeholder: "Camera IP"
        },
        {
            label: "Detection Time",
            placeholder: "4:20 PM"
        },
        {
            label: "Detection Date",
            placeholder: "15/05/2024"
        },
        {
            label: "Location",
            placeholder: "Qurban Line Gate"
        },
    ]
  return (
    <div className='grid grid-cols-3 gap-3'>
 {
    data.map((item, index) => (
        <div key={index}>
        <label className='text-base'>
            {item.label}
        </label>
        <input 
            type="text"
            className='py-2 px-4 bg-white rounded-lg border-[1px] border-gray-200 focus:outline-none'
            placeholder={item.placeholder}
        />
    </div>
    ))
 }

    </div>
  )
}

export default FormContainer