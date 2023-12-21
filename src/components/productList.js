'use client'
import React, { useContext, useEffect } from 'react'
import { data } from '@/Utils/data'
import Link from 'next/link'
// import FilterByproduct from './filterbyproduct'
import { GlobalContext } from '@/context'

const ProductList = () => {
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
    <div>
      {/* <FilterByproduct /> */}
      <section className="flex flex-col md:flex md:flex-row flex-wrap">
        <>
          {data.map((item) => {
            return (
              <div className="product-card shadow-lg">
                <div className="product-image">
                  {item.sale ? (
                    <span className="absolute top-2 left-5 px-3 py-2 bg-orange-400 hover:bg-orange-600 rounded-md text-white z-20">
                      Sale
                    </span>
                  ) : (
                    ''
                  )}

                  <Link href={`/product/${item.id}`}>
                    {' '}
                    <img src={item.image} alt={item.name} />{' '}
                  </Link>
                  <button
                    className="px-2 py-2 bg-orange-500 hover:bg-orange-700 shadow-md rounded-md hover:text-white mx-auto block mb-2 "
                    onClick={() => {
                      if (item.sprice > 0) {
                        addToCart(item.id, 1, item.name, item.sprice)
                      } else {
                        addToCart(item.id, 1, item.name, item.price)
                      }
                    }}
                  >
                    <Link href={''}> Add to Cart </Link>
                  </button>
                </div>
                <div className="product-info">
                  <p className="text-2xl font-semibold cursor-pointer text-orange-700 hover:text-orange-500">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between mx-2">
                    <div className="flex items-center justify-center">
                      <div>
                        {item.sale ? (
                          <p className="text-2xl line-through text-orange-700 hover:text-orange-500">
                            Rs{''} {item.price}
                          </p>
                        ) : (
                          <p className="text-2xl text-orange-700 hover:text-orange-500">
                            Rs{''} {item.price}
                          </p>
                        )}
                      </div>
                      <div>
                        {' '}
                        <p className="text-2xl ml-5 text-orange-700 hover:text-orange-500">
                          Rs {''} {item.sprice}
                        </p>
                      </div>
                    </div>
                    <p className="text-2xl  text-orange-700 hover:text-orange-500">
                      Stock {''} {item.stock}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </>
      </section>
    </div>
  )
}

export default ProductList
