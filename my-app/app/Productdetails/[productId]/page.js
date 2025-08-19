'use client'
import productsApis from '@/app/_utils/productsApis'
import React, { useEffect, useState } from 'react'
import { useParams, usePathname } from 'next/navigation';
import ProductBanner from '../_component/ProductBanner';
import ProductInfo from '../_component/ProductInfo';
import ProductList from '@/app/_components/productList';
import BreadCrim from '@/app/_components/BreadCrim';
const ProductDetails = () => {
    const params = useParams();
    const path = usePathname()
    console.log(path)
     const { productId } = params;
     const [productDetails,setProductDetails] = useState([])
     const [productcategory,setproductcategory] = useState([])
    useEffect(()=>{
        getproductDetails()
    },[productId])
 const getproductDetails=()=>{
       productsApis.getProductDetails(productId).then((res)=>{
        console.log("res",res)
      
               setProductDetails(res?.data?.data[0])
             getproductCategory(res?.data?.data[0])
            }).catch((err)=>console.log(err))
}
const getproductCategory=(product)=>{
  productsApis.getProductByCategory(product?.category).then((res)=>{
  setproductcategory(res?.data?.data)
  })
}
  return (
    <div className="px-4 sm:px-6 lg:px-8 py:28 my-5"> 
     <BreadCrim path={path}/>
     <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 justify-around gap-5 sm:gap-5'>
      <ProductBanner product= {productDetails}/>
      <ProductInfo product= {productDetails}/>
     </div>
     <h2 className='mt-20 mb-10 text-xl font-bold text-[25]'>Similar Product</h2>
     <ProductList productList = {productcategory}/>
    </div>
  )
}

export default ProductDetails
