'use client'
import React, { useState } from 'react'
import { data } from '@/Utils/data'
import RelativeProduct from '@/components/relativeProduct'
import Magnifier from '@/components/magnifier'
import ProductRating from '@/components/productRating'
const ProductDetail = ({ params }) => {
  const [isimage, setIsImage] = useState('')
  const id = params.slug
  const result = data.find((item) => {
    return item.id == id
  })
  //   console.log(result)
  return (
    <div className="min-h-screen">
      <section className="text-orange-600 body-font overflow-hidden">
        <div className="container px-5 md:py-10 mx-auto">
          <div className=" mx-auto md:flex w-full ">
            <div className=" flex flex-col w-full h-full md:w-1/2  ">
              <div className="flex justify-center">
                {/* <img
                  alt={result.name}
                  //   className="lg:w-1/2 w-full  text-orange-500 lg:h-auto h-64 object-cover object-center rounded"
                  className="  w-[400px] h-[400px] md:ml-10 "
                  src={isimage ? isimage : result.image}
                /> */}
                <Magnifier result={result} isimage={isimage} />
              </div>
              {/* multiple product image  */}
              <div className="flex items-center justify-center mx-auto ">
                <div className="border hover:border-black rounded-sm m-1">
                  <img
                    src={result.image}
                    width={80}
                    height={80}
                    onClick={() => {
                      setIsImage(result.image)
                    }}
                  />
                </div>
                <div className="border hover:border-black rounded-sm m-1">
                  <img
                    src="/images/product/suzuki/airfilter/khyber.jpg"
                    width={80}
                    height={80}
                    onClick={() => {
                      setIsImage('/images/product/suzuki/airfilter/khyber.jpg')
                    }}
                  />
                </div>
                <div className="border hover:border-black rounded-sm m-1">
                  <img
                    src="/images/product/suzuki/airfilter/chamber.jpg"
                    width={80}
                    height={80}
                    onClick={() => {
                      setIsImage('/images/product/suzuki/airfilter/chamber.jpg')
                    }}
                  />
                </div>
                <div className="border hover:border-black rounded-sm m-1">
                  <img
                    src="/images/product/suzuki/airfilter/mehran.jpg"
                    width={80}
                    height={80}
                    onClick={() => {
                      setIsImage('/images/product/suzuki/airfilter/mehran.jpg')
                    }}
                  />
                </div>
              </div>
            </div>
            {/* multiple product image end */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font font-semibold  text-orange-500 tracking-widest uppercase">
                {result.brand}
              </h2>
              <span className="text-orange-500 text-2xl title-font font-medium mb-1">
                {result.name}
              </span>
              <div className="flex mb-4">
                {/* <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span> */}
                <ProductRating rate={result.rating} count={result.numReviews} />
                <span className="px-2 mt-2">{result.numReviews}Reviews</span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-blue-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-blue-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-blue-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed text-orange-500 text-2xl">
                {result.description}
              </p>
              <div className="flex mt-6 items-center justify-between pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center justify-between">
                  <span className="mr-3 ">Stock</span>
                  <span>{result.qty}</span>
                  {/* <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button> */}
                  {/* <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button> */}
                  {/* <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Qty</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font  font-medium text-2xl text-orange-600">
                  Rs {result.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add To Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <RelativeProduct result={result} />
        {/* <Magnifier result={result} /> */}
      </section>
    </div>
  )
}

export default ProductDetail
