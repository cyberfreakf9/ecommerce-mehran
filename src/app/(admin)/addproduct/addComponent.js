'use client'
import React, { useState } from 'react'
import { RiProductHuntFill } from 'react-icons/ri'
import { AiOutlineGift } from 'react-icons/ai'
import { FcSalesPerformance } from 'react-icons/fc'
import { FiUsers } from 'react-icons/fi'
import { BiMessageRounded } from 'react-icons/bi'
import { IoIosArrowDropdown } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { AiOutlineHome } from 'react-icons/ai'
import Link from 'next/link'
const AddProductcomponent = () => {
  const [isDash, setDash] = useState(false)
  const [isMobDash, setIsMobDash] = useState(false)
  const router = useRouter()
  const HandleProdct = () => {
    // var acc = document.getElementById('product')
    var acc = document.getElementsByClassName('accordion')
    var i

    for (i = 0; i < acc.length; i++) {
      // acc[i].addEventListener('click', function () {
      // acc.classList.toggle('active')
      var panel = acc[i].nextElementSibling
      if (panel.style.display === 'block') {
        panel.style.display = 'none'
      } else {
        panel.style.display = 'block'
      }
      // })
    }
  }

  return (
    <div className="flex relative bg-gray-100 h-screen ">
      <div
        className={`hidden
         md:block absolute top-2 left-2  bg-gray-700 justify-center text-white border rounded-lg shadow-md w-[200px]`}
      >
        <p className="text-center">Dashboard</p>
        <div className="flex flex-col ">
          <div className="flex">
            <div>
              <AiOutlineHome size={24} />
            </div>
            <div
              className="px-2 border border-transparent
             rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
            >
              <Link href={'/dashboard'}>Home</Link>
            </div>
          </div>
          {/* Home Page */}
          <div className="flex hover:bg-slate-400  ">
            <div>
              <RiProductHuntFill size={24} />
            </div>
            <div
              className="px-2 border border-transparent
             rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
            >
              <div
                className="accordion flex justify-between"
                onClick={() => {
                  HandleProdct()
                  setDash(!isDash)
                }}
                // id="product"
              >
                <div> Product </div>
                <div>
                  <IoIosArrowDropdown
                    size={24}
                    className={`${isDash ? 'rotate-180' : ''} `}
                  />
                </div>
              </div>
              <div className="hidden">
                <div
                  className="hover:bg-gray-300 rounded-lg  text-black"
                  onClick={() => {
                    router.push('productadd')
                  }}
                >
                  Add Product
                </div>
                <div
                  className="hover:bg-gray-300 rounded-lg  text-black"
                  onClick={() => {
                    router.push('/productedit')
                  }}
                >
                  Edit Product
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiOutlineGift size={24} />
            </div>
            <div
              className="px-2 border border-transparent
             rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
            >
              Orders
            </div>
          </div>
          <div className="flex">
            <div>
              <FcSalesPerformance size={24} />
            </div>
            <div
              className="px-2 border border-transparent
             rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
            >
              Sales
            </div>
          </div>
          <div className="flex">
            <div>
              <FiUsers size={24} />
            </div>
            <div
              className="px-2 border border-transparent
             rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
            >
              Users
            </div>
          </div>
          <div className="flex">
            <div>
              <BiMessageRounded size={24} />
            </div>
            <div
              className="px-2 border border-transparent
             rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
            >
              Messages
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute left-0 md:left-[210px]
        overflow-y-auto  top-2 rounded-lg flex w-full bg-gray-300`}
      >
        <h1 className=" text-center">Add Product Content Area</h1>
      </div>
    </div>
  )
}

export default AddProductcomponent
