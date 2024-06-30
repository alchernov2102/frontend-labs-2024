import React from 'react'

export default function Button({Text, Action, Type}) {
  return (
    <button type={Type} className='bg-[#40005d] rounded-md text-white p-4 w-auto h-15' onClick={Action}>
        {Text}
    </button>
  )
}
