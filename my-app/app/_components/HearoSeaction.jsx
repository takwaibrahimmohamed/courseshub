import React from 'react'

const HearoSeaction = () => {
  return (
   <section className="bg-[#f5f3f34f] lg:grid lg:h-screen lg:place-content-center">
  <div className="mx-auto  px-4 py-16 sm:px-6 sm:py-24 lg:py-32 
  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
       All Your Digital Products
        <strong className="text-[#08D9D6]"> Is One Click Away </strong>
     
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
       Start Exploring State Of The Art Assets Now!
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-[#08D9D6] bg-[#08D9D6]
           px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-600"
          href="#"
        >
          Get Started
        </a>

        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default HearoSeaction
