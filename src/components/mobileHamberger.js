'use client'
import React, { useState } from 'react'
import { FaAlignJustify } from 'react-icons/fa'
const MobileHamberger = () => {
  const [ishamb, setIsHamb] = useState(false)
  const hambHandler = () => {
    const hambEl = document.getElementById('hamb')
    const navEl = document.getElementById('main-nav')
    if (!ishamb) {
      navEl.style.display = 'block'
      setIsHamb(true)
    } else {
      navEl.style.display = 'none'
      setIsHamb(false)
    }
  }
  return (
    <div>
      <FaAlignJustify
        className="hamb-menu md:hidden cursor-pointer text-orange-300 hover:text-orange-500 px-1 text-3xl mr-1"
        id="hamb"
        onClick={hambHandler}
      />
    </div>
  )
}

export default MobileHamberger
