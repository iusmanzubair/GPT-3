import React from 'react'

const Article = ({imgUrl, date, title, text}) => {
  return (
    <div className='mb-20'>
      <div className='w-[300px]'>
        <img src={imgUrl} alt="blog" className=''/>
      </div>
      <div className='bg-footerColor w-[300px] px-6 py-3'>
      <div>
        <p className='font-[600] font-primary text-[12px]'>{date}</p>
        <h1 className='my-7 font-[600] text-lg'>{title}</h1>
      </div>
      <div>
        <p className='text-primary text-[12px] cursor-pointer'>{text}</p>
      </div>
      </div>
    </div>
  )
}

export default Article
