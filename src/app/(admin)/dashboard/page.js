import React from 'react'

import Dashcomponent from './dashcomponent'
const page = () => {
  return (
    // <div className="flex relative bg-gray-100 h-screen">
    //   <div className="hidden md:block absolute top-2 left-2 bg-gray-700 justify-center text-white border rounded-lg shadow-md w-[200px]">
    //     <p className="text-center">Dashboard</p>
    //   </div>
    //   <div className="absolute left-[210px] top-2 rounded-lg flex w-full bg-gray-300 ">
    //     <h1 className=" text-center">Dashboard Content Area</h1>
    //   </div>
    // </div>
    <>
      <main className="flex  flex-col  justify-between">
        <div className="mt-5">
          <Dashcomponent />
        </div>
      </main>
    </>
  )
}

export default page
