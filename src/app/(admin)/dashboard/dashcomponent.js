'use client'
import React, { useEffect, useState, useContext } from 'react'
import { RiProductHuntFill } from 'react-icons/ri'
import { AiOutlineGift } from 'react-icons/ai'
import { FcSalesPerformance } from 'react-icons/fc'
import { FiUsers } from 'react-icons/fi'
import { BiMessageRounded } from 'react-icons/bi'
import { IoIosArrowDropdown } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { GlobalContext } from '@/context'
const Dashcomponent = () => {
  const [isDash, setDash] = useState(false)
  const [isMobDash, setIsMobDash] = useState(false)
  const [ishamb, setIsHamb] = useState(false)
  // const [isOrder, setisOrder] = useState(true)
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
  const sideNavHandler = () => {
    const sideEl = document.getElementById('showSide')
    const topEl = document.getElementById('showTop')
    const mainEl = document.getElementById('mainShow')
    const circleEl = document.getElementById('sideCircle')
    const ShowTopEl = document.getElementById('showTop')

    if (!ishamb) {
      sideEl.style.display = 'block'
      topEl.style.display = 'none'
      setIsHamb(true)
    } else {
      sideEl.style.display = 'none'
      topEl.style.display = 'block'
      // mainEl.style.opacity = '1'
      setIsHamb(false)
    }
  }
  useEffect(() => {
    const circleEl = document.getElementById('sideCircle')
    const ShowTopEl = document.getElementById('showTop')
    // if (window.innerWidth > 768) {
    //   circleEl.style.display = 'none'
    //   // ShowTopEl.style.display = 'none'
    // } else {
    //   null
    // }
  }, [ishamb])
  const { isOrder, setisOrder, isPending, setisPending, isShip, setisShip } =
    useContext(GlobalContext)
  return (
    <div className="flex relative  h-screen">
      <div
        className={`hidden
         md:block absolute h-[500px] top-2 left-2 bg-gray-700 justify-center text-white border rounded-lg shadow-md w-[200px] z-10 transition-all duration-300`}
        id="showSide"
      >
        <div className="flex justify-between">
          <p className="text-center mx-auto">Dashboard</p>
          <div
            className="md:hidden bg-orange-500 absolute -right-2  cursor-pointer rounded-full w-6 h-6 shadow-md"
            onClick={() => {
              sideNavHandler()
            }}
            id="sideCircle"
          ></div>
        </div>
        <div className="flex flex-col ">
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
                    alert('hello world')
                  }}
                >
                  Top Product
                </div>
                <div
                  className="hover:bg-gray-300 rounded-lg  text-black"
                  onClick={() => {
                    router.push('/addproduct')
                  }}
                >
                  Add Product
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
        overflow-y-auto  top-2 rounded-lg flex w-full lg:w-[1200px] `}
        id="mainShow"
      >
        <div className="flex flex-col relative w-full h-screen">
          <div
            className="md:hidden bg-orange-500 absolute top-8 left-2  cursor-pointer rounded-full w-6 h-6 shadow-md"
            onClick={() => {
              sideNavHandler()
            }}
            id="showTop"
          ></div>
          {/* <div className="flex justify-center items-center"> */}
          <div className="flex items-center justify-around ">
            <hr
              className={`inline-block ${
                isOrder ? 'bg-gray-800' : 'bg-gray-300'
              } w-52 h-1`}
            />
            <div
              className={`${
                isOrder ? 'bg-gray-400' : 'bg-gray-300'
              } px-5 rounded-lg cursor-pointer hover:bg-gray-400 py-1`}
              onClick={() => {
                setisOrder(true)
                setisPending(false)
                setisShip(false)
              }}
            >
              Orders
            </div>
            <hr
              className={`inline-block ${
                isPending ? 'bg-gray-800' : 'bg-gray-300'
              } w-52 h-1`}
            />
            <div
              className={`${
                isPending ? 'bg-gray-400' : 'bg-gray-300'
              } px-5 rounded-lg cursor-pointer hover:bg-gray-400 py-1`}
              onClick={() => {
                setisOrder(false)
                setisPending(true)
                setisShip(false)
              }}
            >
              Pending
            </div>
            <hr
              className={`inline-block ${
                isShip ? 'bg-gray-800' : 'bg-gray-300'
              } w-52 h-1`}
            />
            <div
              className={`${
                isShip ? 'bg-gray-400' : 'bg-gray-300'
              } px-5 rounded-lg cursor-pointer hover:bg-gray-400 py-1`}
              onClick={() => {
                setisOrder(false)
                setisPending(false)
                setisShip(true)
              }}
            >
              Shipp
            </div>
            <hr className="inline-block bg-gray-300 w-52 h-1" />
            <div className="bg-gray-300 px-5 rounded-lg cursor-pointer hover:bg-gray-400 py-1">
              Comments
            </div>
          </div>
          <div className="pl-2">
            {isOrder ? (
              <div className=" bg-gray-100  mt-5">
                <div className="grid lg:grid-cols-5 gap-4">
                  <div className="flex flex-col bg-gray-200 rounded-lg w-[300px] lg:col-span-2 justify-between">
                    <p>4000$</p>
                    <p>Today Orders</p>
                  </div>
                  <div className="flex flex-col bg-gray-200 rounded-lg w-[300px] lg:col-span-2 justify-between">
                    <p>4000$</p>
                    <p>Today Orders</p>
                  </div>
                  <div className="flex flex-col bg-gray-200 rounded-lg w-[300px] lg:col-span-1 justify-between">
                    <p>4000$</p>
                    <p>Today Orders</p>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
            {isPending ? (
              <div className="flex bg-gray-200 mx-auto justify-center mt-5">
                <div>
                  <h1>This is Pending Order Page Page when order is true</h1>
                </div>
              </div>
            ) : (
              ''
            )}
            {isShip ? (
              <div className="flex bg-gray-200 mx-auto justify-center mt-5">
                <div>
                  <h1>This is Ship Order Page Page when order is true</h1>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          {/* </div> */}
        </div>
        {/* <h1 className=" text-center z-50">Dashboard Content Area</h1> */}
      </div>
    </div>
  )
}

export default Dashcomponent
