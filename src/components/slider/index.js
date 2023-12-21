'use client'
import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
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
const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings}>
        <div className=" slick-first overflow-hidden">
          <div className="w-1/2 h-full flex items-center justify-center  ">
            <div className="flex-col items-center justify-center ml-12 mr-10">
              <p className="text-2xl md:text-7xl text-orange-400 font-semibold ">
                Mehran Filter
              </p>
              <p className="hidden md:block">
                <span className="text-2xl md:text-4xl  font-semibold">
                  Oil Filter
                </span>{' '}
                helps remove contaminants from your car engine's oil that can
                accumulate over time as the oil keeps your engine clean. Clean
                motor oil is important because if the oil were left unfiltered
                for a period of time, it could become saturated with tiny, hard
                particles that can wear surfaces in your engine.
              </p>
              <span className="text-2xl text-orange-500 md:hidden">
                Oil Filer
              </span>
              <button
                className="px-2 py-2 bg-orange-400 rounded-md hover:text-white mt-2 "
                type="button"
              >
                Shop Know
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2 ">
            <Image
              src={'/images/filter1.png'}
              width={450}
              height={450}
              alt="image slider pic one"
              // style={{ width: '100%', height: '490px' }} // optional
            />
          </div>
        </div>
        <div className=" slick-first overflow-hidden">
          <div className="w-1/2 h-full flex items-center justify-center  ">
            <div className="flex-col items-center justify-center ml-10 mr-10">
              <p className="text-2xl md:text-7xl text-orange-400 font-semibold">
                Mehran Filter
              </p>
              <p className="hidden md:block">
                <span className="text-4xl  font-semibold">Air Filter</span> are
                devices used to remove airborne particles and pollutants that
                are hazardous to health and the ecosystem. These devices utilize
                a filter media, which captures those particles on its upstream
                side.
              </p>
              <span className="text-2xl text-orange-500 md:hidden">
                Air Filer
              </span>
              <button
                className="px-2 py-2 bg-orange-400 rounded-md hover:text-white mt-2 "
                type="button"
              >
                Shop Know
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2 ">
            <Image
              src={'/images/filters.png'}
              width={450}
              height={450}
              alt="image slider pic one"
              // style={{ width: '100%', height: '490px' }} // optional
            />
          </div>
        </div>
        <div className=" slick-first overflow-hidden">
          <div className="w-1/2 h-full flex items-center justify-center  ">
            <div className="flex-col items-center justify-center ml-10 mr-10">
              <p className="text-2xl md:text-7xl text-orange-400 font-semibold">
                Mehran Filter
              </p>
              <p className="hidden md:block">
                <span className="text-4xl  font-semibold">Fuel Filter</span> is
                a critical part of this system as it protects your engine from
                harmful debris. The fuel filter screens dirt and rust particles
                from the fuel, keeping them from entering the engine and causing
                damage.
              </p>
              <span className="text-2xl text-orange-500 md:hidden">
                Fule Filer
              </span>
              <button
                className="px-2 py-2 bg-orange-400 rounded-md hover:text-white mt-2 "
                type="button"
              >
                Shop Know
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2 ">
            <Image
              src={'/images/filter2.png'}
              width={450}
              height={450}
              alt="image slider pic one"
              // style={{ width: '100%', height: '490px' }} // optional
            />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default SlickSlider
