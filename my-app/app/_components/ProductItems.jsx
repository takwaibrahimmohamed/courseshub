import Image from 'next/image'
import React from 'react'
import {List} from "lucide-react"
import Link from 'next/link'
const ProductItems = ({product}) => {
  return (
    <Link href={`/Productdetails/${product?.id}`} className='p-1 rounded-lg hover:border hover:shadow-md border-teal-400 hover:cursor-pointer'>
        <Image src={product?.banner?.url} alt="banner" width={400}
        height={350}
        className='rounded-t-lg h-[170px] object-cover'
        />
  <div className='p-3 flex items-center justify-between bg-gray-50 rounded-lg'>
      <div className=''>
      <h2 className='text-[14px] font-bold line-clamp-1'>{product?.title}</h2>
      <h2 className='text-[13px] font-bold uppercase text-gray-400 flex gap-1 items-center'>
        <List className="w-4 h-4"/>{product?.category}</h2>
    </div>
    <h2 className='text-[14px] font-bold'>{product?.price}</h2>
  </div>
      </Link>
   
  )
}

export default ProductItems
