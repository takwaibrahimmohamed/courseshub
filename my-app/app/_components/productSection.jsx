'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './productList'
import productsApis from '../_utils/productsApis'
const ProductSection = () => {
   const [productList,setproductList] = useState([])
    useEffect(()=>{
        getLatestProduct()
    },[])
    const getLatestProduct=()=>{
        productsApis.getLatestProducts().then((res)=>{
            setproductList(res.data.data)
        })
    }
  return (
    <div className='px-10 md:px-20'>
       <h2 className='text-xl font-bold my-4'>Our Latest Product</h2>
     <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection
