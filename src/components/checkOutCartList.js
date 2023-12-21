'use client'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/context'
import { data } from '@/Utils/data'
import { useRouter } from 'next/navigation'
const CheckOutCartList = ({ k }) => {
  const router = useRouter()
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
    kset,
    setk,
    OrderFillInfo,
  } = useContext(GlobalContext)
  const pics = data.find((item) => {
    return item.id == k
  })
  useEffect(() => {
    try {
      if (localStorage.getItem('myCart')) {
        setMyCart(JSON.parse(localStorage.getItem('myCart')))
        saveCart(JSON.parse(localStorage.getItem('myCart')))
      }
    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
  }, [])
  return (
    <>
      <div>
        <li key={k}>
          <div className="flex  justify-around pb-1">
            <div className="rounded-md overflow-hidden border">
              <img src={pics.image} width={90} height={50} />
            </div>
            <div>{myCart[k].name}</div>
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer px-1"
                  onClick={() =>
                    addToCart(k, 1, myCart[k].name, myCart[k].price)
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>{myCart[k].qty}</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer px-1"
                  onClick={() => {
                    removeFromCart(k, 1, myCart[k].name, myCart[k].price)
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="px-2">{myCart[k].price}</div>
              {/* <div className="px-2">{total}</div> */}
            </div>
          </div>
        </li>
      </div>
    </>
  )
}

export default CheckOutCartList
