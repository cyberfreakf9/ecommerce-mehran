'use client'
import React, { useContext } from 'react'
import { GlobalContext } from '@/context'
const ImageBox = () => {
  const { path } = useContext(GlobalContext)
  return (
    <div>
      <img src={`${path}beef1.jpg`} height={200} width={200} alt={`${path}`} />
    </div>
  )
}

export default ImageBox
