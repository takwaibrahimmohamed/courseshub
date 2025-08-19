import Link from 'next/link'
import React from 'react'

const BreadCrim = ({path}) => {
  console.log(path.split("/")[1])
  return (
   <nav aria-label="Breadcrumb" style={{width:'fit-content',}}>
  <ol className="flex overflow-hidden rounded border border-gray-300 bg-white text-sm text-gray-700">
    <li>
      <Link
        href="/"
        className="block h-10 bg-gray-100 px-4 leading-10 transition-colors hover:text-gray-900"
      >
       
        Home
      </Link>
    </li>

    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
      >
      </span>

      <a href="#" className="block h-10 pr-4 pl-6 leading-10 transition-colors hover:text-gray-900">
        {path.split("/")[1]}
      </a>
    </li>
    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
      >
      </span>

      <a href="#" className="block h-10 pr-4 pl-6 leading-10 transition-colors hover:text-gray-900">
      {path.split("/")[2]}
      </a>
    </li>
  </ol>
</nav>
  )
}

export default BreadCrim
