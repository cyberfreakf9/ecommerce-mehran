import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchItem = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center text-gray-500 rounded-s-md border border-r-0 border-gray-300 h-10 w-12 ">
            <BiSearch className="mx-auto w-6 h-6 cursor-pointer" />
          </div>
          <input
            className="w-3/4 h-10 rounded-e-md border border-l-0 border-gray-300 focus:outline-none focus:bg-slate-300 active:bg-slate-300 shadow-md "
            type="text"
            value={''}
            placeholder="Search Product"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchItem
