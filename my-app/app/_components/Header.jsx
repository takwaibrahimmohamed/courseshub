'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/context'
import cartApis from '../_utils/cartApis'
import Cart from './Cart'

const Header = () => {
const [isLoggedIn,setIsLoggedIn] =useState(false)
  const [opencart,setOpencart] = useState(false)
useEffect(()=>{
  setIsLoggedIn(window.location.href.toString().includes("sign-in"))

},[])



 const {cart,setCart} = useContext(CartContext)
 const {user} = useUser()

useEffect(()=>{
  user&&getCartItem()
},[user])
 const getCartItem=()=>{
 console.log("user",user)
  cartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res=>{
    res?.data?.data.forEach((item)=>{
      console.log(item)
     setCart((oldItem)=>[
      ...oldItem,
      {
        id:item?.id,
        product:item?.products[0]


      }
     ])
    })
  })
 }
  return  !isLoggedIn &&(
 <header className="bg-white">
  <div className="shadow-md mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
 <Image src="/logo.svg" alt="logo" width={50} height={50}/>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Explore </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> About Us </Link>
          </li>

          

        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {
          !user?
              <div className="sm:flex sm:gap-4">
          <Link
            className="block rounded-md bg-[#08D9D6]
            px-5 py-2.5 text-sm font-medium
             text-white transition hover:bg-teal-500"
            href="/sign-in"
          >
            Login
          </Link>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            href="#"
          >
            Register
          </a>
        </div>
          :<div className='flex items-center gap-3'>
           <h2 className='relative flex items-center gap-1 cursor-pointer'> 
            <ShoppingCart className='' onClick={()=>setOpencart(!opencart)}/>
              <span className='absolute text-white bg-[#08D9D6] flex items-center justify-center size-0.5 w-[20px] h-[20px] rounded-full bottom-3 -right-2'>{cart?.length}</span></h2>
            <UserButton afterSignOutUrl="/"/>
           {opencart && <Cart/>}
            </div>
        }
    

        <button
          className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
