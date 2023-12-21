import React, { useEffect } from 'react'
import { data } from '@/Utils/data'
import Sliders from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const RelativeProduct = ({ result }) => {
  const res = data.filter((item) => {
    return (item.type = result.type)
  })
  //   useEffect(() => {
  //     console.log(result)
  //   }, [])
  /* Slick Slider */
  const SampleNextArrow = (props) => {
    const { Next, style, onClick } = props
    return (
      <div className="Next" onClick={onClick}>
        <img
          src="/images/right.png"
          style={{
            ...style,
            color: 'red',
            fontSize: '30px',
          }}
        />
      </div>
    )
  }
  function SamplePrevArrow(props) {
    const { Prev, style, onClick } = props
    return (
      <div className="Prev" onClick={onClick}>
        <img
          src="/images/left.png"
          style={{ ...style, color: 'red', fontSize: '30px' }}
        />
      </div>
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div>
      <div>
        <h1 className="text-center">Related Product</h1>
      </div>

      {/* <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center w-full mx-2">
        {res.map((item) => {
          return (
            <div>
              <div>
                <img src={item.image} width={200} height={200} />
              </div>
            </div>
          )
        })}
      </div> */}
      <div>
        <Sliders {...settings}>
          {res.map((item) => {
            return (
              <div>
                <div className="cursor-pointer">
                  <img src={item.image} width={200} height={200} />
                </div>
              </div>
            )
          })}
        </Sliders>
      </div>
    </div>
  )
}

export default RelativeProduct
