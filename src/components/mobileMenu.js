'use client'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
const MobildMenu = () => {
  const [isrotate, setIsRotate] = useState(false)
  const [issubRoate, setSubRotate] = useState(false)
  return (
    <div>
      <ul className="moblist flex items-center justify-center">
        <li
          className="px-3 text-orange-300 hover:text-orange-500 text-lg font-semibold cursor-pointer"
          onClick={() => {
            setIsRotate(true)
          }}
          onMouseLeave={() => {
            setIsRotate(false)
          }}
        >
          <div className="flex items-center">
            <span className="px-1">Product</span>
            {isrotate ? (
              <BsChevronDown className="rotate-180 text-white" />
            ) : (
              <BsChevronDown />
            )}
          </div>
          {isrotate ? (
            <ul className="mobile-sub-item">
              <li className=" text-orange-300 hover:text-orange-500">
                <div
                  className="mobile-sub-ul flex items-center"
                  onClick={() => {
                    setSubRotate(true)
                  }}
                  onMouseLeave={() => {
                    setSubRotate(false)
                  }}
                >
                  Oil Filter{' '}
                  {issubRoate ? (
                    <BsChevronDown className="-rotate-90 text-white" />
                  ) : (
                    <BsChevronDown className="rotate-90" />
                  )}
                  {issubRoate ? (
                    <ul>
                      <li className="hidden">Honda</li>
                      <li className="hidden">Toyota</li>
                      <li className="hidden">Suzuki</li>
                    </ul>
                  ) : (
                    ''
                  )}
                </div>
              </li>
              <li className="text-orange-300 hover:text-orange-500">
                Air Filter
              </li>
              <li className="text-orange-300 hover:text-orange-500">
                Ac Filter
              </li>
              <li className="text-orange-300 hover:text-orange-500">
                Fuel Filter
              </li>
              <li className="text-orange-300 hover:text-orange-500">Oil</li>
              <li className="text-orange-300 hover:text-orange-500">
                Perfumes
              </li>
              <li className="text-orange-300 hover:text-orange-500">Spray</li>
            </ul>
          ) : (
            ''
          )}
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
      </ul>
    </div>
  )
}

export default MobildMenu
