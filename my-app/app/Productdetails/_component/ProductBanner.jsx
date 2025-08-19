import Image from 'next/image'
import React from 'react'

const ProductBanner = ({product}) => {
     const imageUrl = product?.banner?.url;
  return (
    <div style={{width:"100%"}}>
       {imageUrl ? (
        <Image
          src={imageUrl}
          alt="banner"
          width={400}
          height={400}
          loading="lazy"
          className="rounded-lg h-full object-cover w-full"
        />
      ) :  <div className='w-full h-[250] bg-slate-200 rounded-lg animate-pulse'></div>}
   
    </div>
  )
}

export default ProductBanner
