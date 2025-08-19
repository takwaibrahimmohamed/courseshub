import React from 'react'
import ProductItems from './ProductItems'

const ProductList = ({productList}) => {
  console.log("productList",productList)
  return (
    <div className='grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
     {productList.map(item=>(<ProductItems key={item.id} product={item}/>))}
    </div>
  )
}

export default ProductList
