'use client'
import React, { useState, useRef, createRef, useContext } from 'react'
import {
  BsFillPersonFill,
  BsFillPersonPlusFill,
  BsCartFill,
} from 'react-icons/bs'
import { FaAlignJustify } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GlobalContext } from '@/context'
import CartList from '../cartList'
export const AuthNavbar = () => {
  // const [ishamb, setIsHamb] = useState(false)
  // const [isCart, setCart] = useState(false)
  const router = useRouter()
  const refs = useRef([])
  refs.current = [0, 1].map((ref, index) => (refs.current[index] = createRef()))
  const {
    show,
    setShow,
    trendView,
    setTrendView,
    myCart,
    setMyCart,
    total,
    setTotl,
    saveCart,
    addToCart,
    clearCart,
    removeFromCart,
    price,
    setPrice,
    qty,
    setQty,
  } = useContext(GlobalContext)
  const toggleCartMobile = () => {
    if (refs.current[1].current.classList.contains('translate-x-full')) {
      refs.current[1].current.classList.remove('translate-x-full')
      refs.current[1].current.classList.add('translate-x-0')
    } else if (
      !refs.current[1].current.classList.contains('translate-x-full')
    ) {
      refs.current[1].current.classList.remove('translate-x-0')
      refs.current[1].current.classList.add('translate-x-full')
    }
    /*///////////////////////*/
    if (refs.current[0].current.classList.contains('translate-x-full')) {
      refs.current[0].current.classList.remove('translate-x-full')
      refs.current[0].current.classList.add('translate-x-0')
    } else if (
      !refs.current[0].current.classList.contains('translate-x-full')
    ) {
      refs.current[0].current.classList.remove('translate-x-0')
      refs.current[0].current.classList.add('translate-x-full')
    }
  }
  // const hambHandler = () => {
  //   const hambEl = document.getElementById('hamb')
  //   const navEl = document.getElementById('main-nav')
  //   if (!ishamb) {
  //     navEl.style.display = 'block'
  //     setIsHamb(true)
  //   } else {
  //     navEl.style.display = 'none'
  //     setIsHamb(false)
  //   }
  // }
  // const toggleMenu = () => {
  //   setIsHamb(!ishamb)
  // }
  const toggleCart = () => {
    if (refs.current[0].current.classList.contains('translate-x-full')) {
      refs.current[0].current.classList.remove('translate-x-full')
      refs.current[0].current.classList.add('translate-x-0')
    } else if (
      !refs.current[0].current.classList.contains('translate-x-full')
    ) {
      refs.current[0].current.classList.remove('translate-x-0')
      refs.current[0].current.classList.add('translate-x-full')
    }
  }
  return (
    <div className="flex items-center justify-center">
      <span onClick={toggleCartMobile}>
        <BsCartFill className="text-orange-300 hover:text-orange-500 text-2xl cursor-pointer mx-1" />
      </span>
      {/* Cart Mobile  Code Start Here  */}
      {/* /////////////////////////// */}
      <div className=" flex md:hidden  relative">
        <span className="sr-only">Open main menu</span>
        {/* {isCart ? (
                <span className="inline-flex absolute -top-10 right-2 items-center rounded-full bg-red-600 px-2 h-5 w-5 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10">
                  {CartCount}
                </span> */}
        <div
          ref={refs.current[1]}
          className=" p-5 bg-slate-300 absolute z-20 -top-6 -right-32 transform transition-transform translate-x-full "
          id="divid"
        >
          <span onClick={toggleCartMobile} className="absolute top-0 right-0  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mx-2  cursor-pointer  hover:text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          {/* my new cart code here  */}
          <div>
            <h1>Hello Mobile</h1>
          </div>
          {/* my new cart code end */}
        </div>

        {/* //////Mobile Cart Box End ////////// */}
      </div>
      {/* ///////////////////////// */}
      {/* Cart mobile  Code End Here  */}
      {/* Cart Code Start Here  */}
      {/* ///////////////////////////// */}
      <div className="hidden relative md:flex  ">
        <div
          ref={refs.current[0]}
          className=" p-5 bg-slate-300 absolute z-40 overflow-x-hidden -top-6 -right-60 mx-3  transform transition-transform translate-x-full "
          id="divid"
        >
          <span onClick={toggleCart} className="absolute top-0 right-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 md:mr-4  lg:mr-0 text-black  hover:text-orange-500 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <div className="mt-5">
            <div>
              <ul className="flex">
                <li className="w-24">image</li>
                <li className="w-56">name</li>
                <li className="w-10">qty</li>
                <li className="w-11">price</li>
              </ul>
            </div>
            {Object.keys(myCart).length == 0 && <div>Your Cart Is Empty</div>}
            <div className="flex flex-col">
              <ul className="list-decimal">
                {Object.keys(myCart).map((k) => {
                  return (
                    <div>
                      <CartList k={k} />
                    </div>
                  )
                })}

                <div className="w-full text-right px-2"> Total is: {total}</div>
              </ul>
            </div>
            {Object.keys(myCart).length == 0 ? (
              <div className="  justify-between m-5">
                <button
                  className="flex-shrink-0 mx-2 cursor-not-allowed opacity-50  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  onClick={() => {
                    router.push('/checkout')
                  }}
                >
                  Checkout
                </button>
                <button
                  className="flex-shrink-0 cursor-not-allowed opacity-50  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            ) : (
              <div className="flex justify-between m-5">
                <button
                  className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  onClick={() => {
                    router.push('/checkout')
                  }}
                >
                  Checkout
                </button>
                <button
                  className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* //////////////////////////// */}
      {/* <FaAlignJustify
        className="hamb-menu md:hidden cursor-pointer text-orange-300 hover:text-orange-500 px-1 text-3xl mr-1"
        id="hamb"
        onClick={hambHandler}
      /> */}
    </div>
  )
}
