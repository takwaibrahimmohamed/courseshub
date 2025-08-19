import React from 'react'

const SkeletonInfoProduct = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='w-full h-[20] bg-slate-200 rounded-lg animate-pulse'></div>
      <div className='w-50 md:w-[70px] h-[20] bg-slate-200 rounded-lg animate-pulse'></div>
      <div className='w-full h-[20] bg-slate-200 rounded-lg animate-pulse'></div>
      <div className='w-full h-[20] bg-slate-200 rounded-lg animate-pulse'></div>
      <div className='w-full h-[20] bg-slate-200 rounded-lg animate-pulse'></div>
      <div className='w-30 md:w-50 h-[20] bg-slate-200 rounded-lg animate-pulse'></div>
    </div>
  )
}

export default SkeletonInfoProduct
