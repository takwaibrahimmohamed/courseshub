'use client'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import React, { useContext } from 'react'
import SkeletonInfoProduct from './SkeletonInfoProduct'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import cartApis from '@/app/_utils/cartApis'
import { CartContext } from '@/app/_context/context'

const ProductInfo = ({product}) => {
  const {user} = useUser()
  const router = useRouter()
  
   const {cart,setCart} = useContext(CartContext)
const AddToCart =()=>{
if(!user){
  router.push("/sign-in")
}
else{
  const data = {
    data:{
      userName:user.fullName,
    email:user.primaryEmailAddress.emailAddress,
    products:[product?.id]
    }
  }
  cartApis.addToCart(data).then((res)=>
  {
    console.log(res)
    setCart(oldcart=>[...oldcart,{
      id:res?.data?.data?.id,
      product
    }])
  }).catch((err)=>{console.log(err)})
}
}
  return (
   <div>
    {
      product?.id ?
       <div className='p-3'>
      <div className=''>
      <h2 className='text-[20px] font-bold line-clamp-1'>{product?.title}</h2>
      <h2 className='text-[18px] font-bold uppercase text-gray-500'>
        {product?.category}</h2>
    </div>
  {product?.duscription?.length > 0 &&
 product.duscription[0]?.children?.length > 0 &&
 (
   <p className='text-[16px] font-bold capitalize my-4'>
     {product.duscription[0].children[0].text}
   </p>
 )
}

  
    <h2 className='text-[16px] text-gray-500 font-bold capitalize flex items-center gap-2'>
      {
        product?.instantDelivery?<BadgeCheck className='w-5 h-5 text-green-500'/>:<AlertOctagon className='w-5 h-5 text-red-500'/>

      }
      Eligible For Instance Delivery</h2>
    <h2 className='my-3 text-[20px] font-bold text-[#08D9D6]'>$ {product?.price}</h2>
    <button className='flex gap-2 bg-[#08D9D6] hover:bg-teal-600 rounded-lg text-white p-3 cursor-pointer'
    onClick={()=>AddToCart()}
    ><ShoppingCart/> Add Too Cart</button>
  </div>
  :
  <SkeletonInfoProduct/>
    }
   </div>
  )
}

export default ProductInfo
