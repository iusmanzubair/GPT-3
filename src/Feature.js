import React from 'react'

const Feature = ({title, text}) => {
  return (
    <div className='flex flex-col md:px-16 py-10'>
      <div className='mb-4'>
      <div className="h-1 w-10 bargradient my-1"></div>
        <h1 className='text-white text-xl font-[700]'>{title}</h1>
      </div>
      <div>
        <p className='text-textColor font-[600] font-primary'>{text}</p>
      </div>
    </div>
  )
}

export default Feature
