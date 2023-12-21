'use client'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
const MobNavitem = () => {
  const [isrotate, setIsRotate] = useState(false)
  return (
    <div>
      {/* <ul className="flex items-center justify-center">
        <li
          className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer"
          // onMouseOver={() => {
          //   setIsRotate(true)
          // }}
          // onMouseLeave={() => {
          //   setIsRotate(false)
          // }}
        >
          <div className="flex items-center">
            <span className="px-1">Product</span>
            {isrotate ? (
              <BsChevronDown className="rotate-180 text-white" />
            ) : (
              <BsChevronDown />
            )}
          </div>
          <ul>
            <li>
              Oil Filter
              <ul>
                <li>Honda</li>
                <li>Toyota</li>
                <li>Suzuki</li>
              </ul>
            </li>
            <li>
              Air Filter
              <ul>
                <li>Honda</li>
                <li>Toyota</li>
                <li>Suzuki</li>
              </ul>
            </li>
            <li>Ac Filter</li>
            <li>Fuel Filter</li>
            <li>Oil</li>
            <li>Perfume</li>
            <li>Spray</li>
          </ul>
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Cars
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Filter
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Brand
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          About Us
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Contact Us
        </li>
      </ul> */}
      <ul className="moblist flex items-center justify-center">
        <li
          className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer"
          onClick={() => {
            setIsRotate(!isrotate)
          }}
          onMouseLeave={() => {
            setIsRotate(false)
          }}
        >
          <div className="flex items-center">
            <span className="px-1">Oil Filter</span>
            {isrotate ? (
              <BsChevronDown className="rotate-180 text-white" />
            ) : (
              <BsChevronDown />
            )}
          </div>
          {isrotate ? (
            <ul>
              <li>Honda</li>
              <li>Toyota</li>
              <li>Suzuki</li>
            </ul>
          ) : (
            <ul>
              <li className="hidden">Honda</li>
              <li className="hidden">Toyota</li>
              <li className="hidden">Suzuki</li>
            </ul>
          )}
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Air Filter
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Ac Filter
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Fuel Filter
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Oil
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Perfumes
        </li>
        <li className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer">
          Spray
        </li>
      </ul>
    </div>
  )
}

export default MobNavitem
