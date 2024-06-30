import React from 'react'

export default function PriceTag({Amount}) {
  return (
    <div className='w-[7rem] h-[3rem] bg-[#40005d] flex items-center justify-center border rounded-lg'>
        <p className="text-xl font-bold text-white">{"$" + Amount}</p>
    </div>
  )
}
