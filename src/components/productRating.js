import React from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const ProductRating = ({ rate, count }) => {
  return (
    <Rating style={{ maxWidth: 100 }} value={rate} readOnly>
      {count} Reviews{' '}
    </Rating>
  )
}

export default ProductRating
