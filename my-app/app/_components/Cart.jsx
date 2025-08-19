import React, { useContext, useState } from 'react'
import { CartContext } from '../_context/context'
import Link from 'next/link'

const Cart = () => {
    const {cart,setcart} = useContext(CartContext)
  
    console.log(cart)
  return (
    <div className='h-[300px] w-[250] bg-gray-100 z-10 rounded-md
    shadow-sm absolute mx-10 right-1 top-15 md:right-10 p-5 overflow-auto
    '>
      <div className="mt-4 space-y-6">
    <ul className="space-y-4">
        {cart?.map((item)=>(
      <li key={item?.id} className="flex items-center gap-4">
        <img
          src={item?.
product?.banner?.url}
          alt=""
          className="size-16 rounded-sm object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">{item?.
product?.title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">
                category:
               </dt>
              <dd className="inline"> {item?.
product?.category}</dd>
            </div>

            <div>
              <dt className="inline">Price:</dt>
              <dd className="inline">{item?.
product?.price}</dd>
            </div>
          </dl>
        </div>
      </li>
        ))}


  
    </ul>
    </div>
    <div className="space-y-4 text-center mt-5">
      <Link
        href="/cart"
        className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({cart?.length})
      </Link>

     
    </div>
    </div>
  )
}

export default Cart
