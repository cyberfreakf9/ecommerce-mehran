'use client'
import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '@/context'
const page = () => {
  // const { oder,myCart } = useContext(GlobalContext)
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
    oder,
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
    // <div>
    //   <h1>Order Successfully</h1>
    //   <h1>
    //     {oder.name} {oder.email} {oder.address} {oder.zip}
    //   </h1>
    //   <div classNameNameName="text-center w-full">
    //     <ul classNameNameName=" list-decimal   w-full">
    //       {Object.keys(myCart).map((k) => {
    //         return (
    //           <div>
    //             <h1>{myCart[k].name}</h1>
    //           </div>
    //         )
    //       })}
    //       <div classNameNameName="w-full text-right px-2"> Total is: {total}</div>
    //     </ul>
    //   </div>
    // </div>
    ///////////////CODE START/////////
    <div>
      <div dir="ltr">
        <div classNameName="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
          <header classNameName="site-header-with-search top-0 z-50 w-full lg:h-22 sticky border-b border-border-200 shadow-sm">
            <div classNameName="fixed inset-0 -z-10 h-[100vh] w-full bg-black/50 hidden"></div>
            {/* <div classNameName=" flex w-full transform-gpu items-center justify-between bg-light transition-transform duration-300 lg:h-22 lg:px-4 xl:px-8"> */}
            {/* <div classNameName="flex w-full shrink-0 grow-0 basis-auto flex-col items-center lg:w-auto lg:flex-row">
            <a classNameName="inline-flex pt-2 pb-3 lg:mx-0" href="/">
              <span classNameName="relative h-10 w-32 overflow-hidden md:w-40">
                <img
                  alt="Pickbazar"
                  loading="eager"
                  decoding="async"
                  data-nimg="fill"
                  classNameName="object-contain"
                  sizes="(max-width: 768px) 100vw"
                  srcset="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=3840&amp;q=75 3840w"
                  src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=3840&amp;q=75"
                  // style={{"position: absolute, height: 100%, width: 100%, inset: 0px, color: transparent"}}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    color: 'transparent',
                  }}
                />
              </span>
            </a>
            <div classNameName="hidden ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto xl:block">
              <div
                classNameName="relative inline-block ltr:text-left rtl:text-right"
                data-headlessui-state=""
              >
                <button
                  classNameName="flex h-11 shrink-0 items-center text-sm font-semibold text-heading focus:outline-0 md:text-base xl:px-4 rounded border-border-200 bg-light xl:min-w-150 xl:border xl:text-accent"
                  id="headlessui-menu-button-:r17:"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <span classNameName="flex h-5 w-5 items-center justify-center ltr:mr-2 rtl:ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.347"
                      height="24.101"
                      viewBox="0 0 20.347 24.101"
                      fill="currentColor"
                      classNameName="max-h-full max-w-full"
                    >
                      <g id="Grocery" transform="translate(-39.481 0.052)">
                        <path
                          id="Path_17386"
                          data-name="Path 17386"
                          d="M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z"
                          transform="translate(-294.289 -380.346)"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.1"
                        ></path>
                        <path
                          id="Path_17387"
                          data-name="Path 17387"
                          d="M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z"
                          transform="translate(-0.5)"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span classNameName="whitespace-nowrap">Grocery</span>
                  <span classNameName="flex pt-1 ltr:ml-auto ltr:pl-2.5 rtl:mr-auto rtl:pr-2.5">
                    <svg width="10" height="6" viewBox="0 0 10 6">
                      <path
                        d="M128,192l5,5,5-5Z"
                        transform="translate(-128 -192)"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div classNameName="relative flex w-full justify-center border-t lg:ml-8 lg:w-auto lg:border-none">
              <button
                data-variant="custom"
                classNameName="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 px-5 py-0 h-12 !flex max-w-full items-center gap-2 px-0 text-sm !font-normal before:absolute before:inset-y-0 before:left-0 before:my-auto before:h-8 before:w-[1px] focus:!shadow-none focus:!ring-0 md:text-base lg:pl-5 lg:before:bg-[#E5E7EB]"
              >
                <span classNameName="flex shrink-0 grow-0 basis-auto items-center gap-1 text-base text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    classNameName="h-4 w-4 "
                  >
                    <path
                      d="M256 0C161.896 0 85.333 76.563 85.333 170.667c0 28.25 7.063 56.26 20.49 81.104L246.667 506.5c1.875 3.396 5.448 5.5 9.333 5.5s7.458-2.104 9.333-5.5l140.896-254.813c13.375-24.76 20.438-52.771 20.438-81.021C426.667 76.563 350.104 0 256 0zm0 256c-47.052 0-85.333-38.281-85.333-85.333S208.948 85.334 256 85.334s85.333 38.281 85.333 85.333S303.052 256 256 256z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>Find Locations :</span>
                </span>
                <span classNameName="flex items-center gap-2 pl-1 leading-normal">
                  {' '}
                  Enter your address
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 7.2"
                  width="12"
                  height="7.2"
                  classNameName="mt-1 h-2.5 w-2.5 text-accent transition-all"
                >
                  <path
                    d="M6.002 5.03L10.539.265a.826.826 0 011.211 0 .94.94 0 010 1.275l-5.141 5.4a.827.827 0 01-1.183.026L.249 1.545a.937.937 0 010-1.275.826.826 0 011.211 0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <div classNameName="w-full border border-border-200 bg-light p-5 shadow-[-8px_8px_16px_rgba(0,0,0,0.18)] md:min-h-0 md:w-[650px] md:rounded-xl xl:w-[1076px] fixed inset-x-0 top-[109px] mx-auto bg-white lg:top-[82px] hidden">
                <form novalidate="" classNameName="flex h-full gap-2.5">
                  <div classNameName="w-full">
                    <div classNameName="relative">
                      <div classNameName="">
                        <input
                          type="text"
                          name="location"
                          placeholder="Search location form here"
                          classNameName="line-clamp-1 flex h-12 w-full appearance-none items-center rounded border border-border-base p-4 pr-9 text-sm font-medium text-heading transition duration-300 ease-in-out invalid:border-red-500 focus:border-accent focus:outline-0 focus:ring-0 pac-target-input"
                          value=""
                          autocomplete="off"
                        />
                      </div>
                      <div classNameName="absolute top-0 right-0 flex h-12 w-12 items-center justify-center text-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          classNameName="h-5 w-5 cursor-pointer hover:text-accent"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                          <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path>
                          <path d="M12 2l0 2"></path>
                          <path d="M12 20l0 2"></path>
                          <path d="M20 12l2 0"></path>
                          <path d="M2 12l2 0"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button
                    data-variant="normal"
                    classNameName="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 border border-border-base bg-gray-300 hover:bg-gray-300 border-border-400 text-body cursor-not-allowed px-5 py-0 h-12 h-12 w-12 !px-0"
                    disabled=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.8"
                      stroke="currentColor"
                      classNameName="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div> */}
            {/* <ul classNameName="hidden shrink-0 items-center space-x-7 rtl:space-x-reverse lg:flex 2xl:space-x-10">
     <li>
     <a classNameName="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent" href="/shops">Shops</a>
     </li>
     <li>
     <a classNameName="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent" href="/offers">Offers</a>
     </li>
     <li>
     <a classNameName="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent" href="/help">FAQ</a>
     </li>
     <li>
     <a classNameName="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent" href="/contact">Contact</a>
     </li>
     <div classNameName="flex items-center space-x-4 rtl:space-x-reverse">
     <a href="https://pickbazar-react-admin-rest.vercel.app/register" target="_blank" rel="noreferrer" classNameName="inline-flex h-9 shrink-0 items-center justify-center rounded border border-transparent bg-accent px-3 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out hover:bg-accent-hover focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700">Become a Seller</a>
     <li>
     <div classNameName="relative inline-block ltr:text-left rtl:text-right" data-headlessui-state=""><button classNameName="flex items-center focus:outline-0" id="headlessui-menu-button-:r18:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state=""><div classNameName="relative cursor-pointer overflow-hidden rounded-full border border-border-100 h-10 w-10"><img alt="user name" decoding="async" data-nimg="fill" src="/_next/static/media/avatar.c9441dc8.svg" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div><span classNameName="sr-only">user avatar</span></button></div>
     </li>
     </div>
     </ul> */}
            {/* </div> */}
            {/*////////////// Next Code down to oder page /////////// */}
            {/* <div classNameName="w-full border-b border-t border-border-200 bg-light shadow-sm hidden">
     <div classNameName="relative flex w-full justify-center border-t before:absolute before:inset-y-0 before:my-auto before:h-8 before:w-[1px] lg:w-auto lg:border-none lg:pl-8 lg:before:w-0 lg:before:bg-[#E5E7EB] lg:flex 2xl:hidden">
     <button data-variant="custom" classNameName="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 px-5 py-0 h-12 flex items-center gap-2 focus:!shadow-none focus:!ring-0">
     <span classNameName="flex items-center gap-1 text-base text-accent">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" classNameName="h-4 w-4 "><path d="M256 0C161.896 0 85.333 76.563 85.333 170.667c0 28.25 7.063 56.26 20.49 81.104L246.667 506.5c1.875 3.396 5.448 5.5 9.333 5.5s7.458-2.104 9.333-5.5l140.896-254.813c13.375-24.76 20.438-52.771 20.438-81.021C426.667 76.563 350.104 0 256 0zm0 256c-47.052 0-85.333-38.281-85.333-85.333S208.948 85.334 256 85.334s85.333 38.281 85.333 85.333S303.052 256 256 256z" fill="currentColor"></path></svg>
     <span classNameName="hidden md:block">
     Find Locations :</span>
     </span>
     <span classNameName="flex items-center gap-2 pl-1">
      Enter your address
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7.2" width="12" height="7.2" classNameName="mt-1 h-2.5 w-2.5 text-accent transition-all"><path d="M6.002 5.03L10.539.265a.826.826 0 011.211 0 .94.94 0 010 1.275l-5.141 5.4a.827.827 0 01-1.183.026L.249 1.545a.937.937 0 010-1.275.826.826 0 011.211 0z" fill="currentColor">
      </path>
      </svg>
      </button>
      <div classNameName="w-full border border-border-200 bg-light p-5 shadow-[-8px_8px_16px_rgba(0,0,0,0.18)] md:min-h-0 md:w-[650px] md:rounded-xl xl:w-[1076px] fixed inset-x-0 top-14 mx-auto bg-white md:top-[109px] lg:top-[128px] hidden">
      <form novalidate="" classNameName="flex h-full gap-2.5">
      <div classNameName="w-full">
      <div classNameName="relative">
      <div classNameName="">
      <input type="text" name="location" placeholder="Search location form here" classNameName="line-clamp-1 flex h-12 w-full appearance-none items-center rounded border border-border-base p-4 pr-9 text-sm font-medium text-heading transition duration-300 ease-in-out invalid:border-red-500 focus:border-accent focus:outline-0 focus:ring-0 pac-target-input" value="" autocomplete="off" />
      </div>
      <div classNameName="absolute top-0 right-0 flex h-12 w-12 items-center justify-center text-accent">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" classNameName="h-5 w-5 cursor-pointer hover:text-accent">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0">
      </path>
      <path d="M12 2l0 2">
      </path>
      <path d="M12 20l0 2">
      </path>
      <path d="M20 12l2 0">
      </path>
      <path d="M2 12l2 0">
      </path>
      </svg>
      </div>
      </div>
      </div>
      <button data-variant="normal" classNameName="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 border border-border-base bg-gray-300 hover:bg-gray-300 border-border-400 text-body cursor-not-allowed px-5 py-0 h-12 h-12 w-12 !px-0" disabled=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" classNameName="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
      </button>
      </form>
      </div>
      </div>
      </div> */}
            {/* </div> */}
          </header>
          <div classNameName="p-4 sm:p-8">
            <div classNameName="mx-auto w-full max-w-screen-lg">
              <div classNameName="mb-5">
                <a
                  classNameName="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
                  href="/"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5166 8.82913C18.5161 8.82872 18.5156 8.82817 18.5152 8.82776L11.1719 1.48546C10.8589 1.17235 10.4428 1 10.0001 1C9.55745 1 9.1413 1.17235 8.82816 1.48546L1.48868 8.82405C1.48621 8.82652 1.4836 8.82913 1.48127 8.8316C0.838503 9.47801 0.839602 10.5268 1.48443 11.1716C1.77903 11.4663 2.16798 11.6368 2.584 11.6548C2.60103 11.6565 2.61806 11.6573 2.63522 11.6573H2.92776V17.0606C2.92776 18.13 3.79797 19 4.86746 19H7.7404C8.0317 19 8.2678 18.7638 8.2678 18.4727V14.2363C8.2678 13.7484 8.66486 13.3515 9.15283 13.3515H10.8474C11.3354 13.3515 11.7323 13.7484 11.7323 14.2363V18.4727C11.7323 18.7638 11.9684 19 12.2597 19H15.1326C16.2022 19 17.0723 18.13 17.0723 17.0606V11.6573H17.3437C17.7862 11.6573 18.2024 11.4849 18.5156 11.1717C19.1612 10.526 19.1614 9.47527 18.5166 8.82913ZM17.7697 10.426C17.6559 10.5398 17.5045 10.6026 17.3437 10.6026H16.5449C16.2536 10.6026 16.0175 10.8387 16.0175 11.1299V17.0606C16.0175 17.5484 15.6206 17.9453 15.1326 17.9453H12.7871V14.2363C12.7871 13.1669 11.917 12.2968 10.8474 12.2968H9.15283C8.08321 12.2968 7.213 13.1669 7.213 14.2363V17.9453H4.86746C4.37962 17.9453 3.98256 17.5484 3.98256 17.0606V11.1299C3.98256 10.8387 3.74647 10.6026 3.45516 10.6026H2.67011C2.66187 10.6021 2.65377 10.6016 2.64539 10.6015C2.48827 10.5988 2.3409 10.5364 2.23047 10.4259C1.99562 10.191 1.99562 9.80884 2.23047 9.57387C2.23061 9.57387 2.23061 9.57373 2.23075 9.57359L2.23116 9.57318L9.5742 2.23116C9.68792 2.11731 9.83914 2.05469 10.0001 2.05469C10.1609 2.05469 10.3121 2.11731 10.426 2.23116L17.7674 9.57167C17.7685 9.57277 17.7697 9.57387 17.7708 9.57497C18.0045 9.81021 18.004 10.1916 17.7697 10.426Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.5"
                    ></path>
                  </svg>
                  Back to Home
                </a>
              </div>
              <div classNameName="relative overflow-hidden rounded border shadow-sm"></div>
            </div>
          </div>
          {/* ///////3rd div //////// */}
          <div className="visible h-12 md:h-14 lg:hidden">
            <nav className="fixed bottom-0 z-10 flex h-12 w-full justify-between bg-light py-1.5 px-2 shadow-400 ltr:left-0 rtl:right-0 md:h-14">
              <button
                className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
                tabindex="0"
                data-projection-id="32"
              >
                <span className="sr-only">Burger Menu</span>
                <svg
                  width="25.567"
                  height="18"
                  viewBox="0 0 25.567 18"
                  className="false"
                >
                  <g transform="translate(-776 -462)">
                    <rect
                      width="12.749"
                      height="2.499"
                      rx="1.25"
                      transform="translate(776 462)"
                      fill="currentColor"
                    ></rect>
                    <rect
                      width="25.567"
                      height="2.499"
                      rx="1.25"
                      transform="translate(776 469.75)"
                      fill="currentColor"
                    ></rect>
                    <rect
                      width="17.972"
                      height="2.499"
                      rx="1.25"
                      transform="translate(776 477.501)"
                      fill="currentColor"
                    ></rect>
                  </g>
                </svg>
              </button>
              <button
                className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
                tabindex="0"
                data-projection-id="33"
              >
                <span className="sr-only">Home</span>
                <svg width="17.996" height="20.442" viewBox="0 0 17.996 20.442">
                  <g transform="translate(-30.619 0.236)">
                    <path
                      d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
                      transform="translate(0 0)"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.4"
                    ></path>
                  </g>
                </svg>
              </button>
              <button
                className="product-cart relative flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
                tabindex="0"
                data-projection-id="34"
              >
                <span className="sr-only">Cart</span>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <g transform="translate(-127 -122)">
                    <path
                      d="M4.7,3.8H17.3a.9.9,0,0,1,.9.9V17.3a.9.9,0,0,1-.9.9H4.7a.9.9,0,0,1-.9-.9V4.7A.9.9,0,0,1,4.7,3.8ZM2,4.7A2.7,2.7,0,0,1,4.7,2H17.3A2.7,2.7,0,0,1,20,4.7V17.3A2.7,2.7,0,0,1,17.3,20H4.7A2.7,2.7,0,0,1,2,17.3ZM11,11C8.515,11,6.5,8.583,6.5,5.6H8.3c0,2.309,1.5,3.6,2.7,3.6s2.7-1.291,2.7-3.6h1.8C15.5,8.583,13.485,11,11,11Z"
                      transform="translate(125 120)"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                </svg>
              </button>
              <button
                className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-0"
                tabindex="0"
                data-projection-id="35"
              >
                <span className="sr-only">User</span>
                <svg width="16.577" height="18.6" viewBox="0 0 16.577 18.6">
                  <g transform="translate(-95.7 -121.203)">
                    <path
                      d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z"
                      transform="translate(7819 -2793.5)"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.6"
                    ></path>
                  </g>
                </svg>
              </button>
            </nav>
          </div>
          <div className="relative overflow-hidden rounded border shadow-sm">
            <div className="bg-[#F7F8FA] lg:px-11 lg:py-5 p-6">
              <div className="mb-0 flex flex-col flex-wrap items-center justify-between gap-x-8 text-base font-bold text-heading sm:flex-row lg:flex-nowrap">
                <div className="order-2 flex w-full gap-6 xs:flex-nowrap sm:order-1 max-w-full basis-full justify-between lg:ltr:mr-auto">
                  <div className="flex flex-wrap items-center">
                    <span className="mb-2 block text-xs xs:text-base lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
                      Order Status :
                    </span>
                    <div className="w-full lg:w-auto">
                      <span className="px-3 py-1  rounded-full text-sm text-black  min-h-[2rem] items-center justify-center text-[9px] !leading-none xs:text-sm inline-flex bg-orange-300">
                        Order Pending
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="mb-2 block text-xs xs:text-base lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
                      Payment Status :
                    </span>
                    <div className="w-full lg:w-auto">
                      <span className="px-3 py-1 rounded-full text-sm text-light bg-orange-300 min-h-[2rem] items-center justify-center text-[9px] !leading-none xs:text-sm inline-flex">
                        Payment Pending
                      </span>
                    </div>
                  </div>
                </div>
                <span className="order-2 mt-5 w-full max-w-full shrink-0 basis-full sm:order-1 lg:mt-0 lg:w-auto lg:max-w-none lg:basis-auto lg:ltr:ml-auto lg:rtl:mr-auto">
                  <button
                    data-variant="normal"
                    className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-orange-500 text-light border border-transparent hover:bg-accent-hover px-3 py-0 h-9 text-sm h-10 w-full"
                  >
                    Pay Now
                  </button>
                </span>
                <span className="order-2 mt-5 w-full max-w-full shrink-0 basis-full sm:order-1 lg:mt-0 lg:w-auto lg:max-w-none lg:basis-auto lg:ltr:ml-auto lg:rtl:mr-auto">
                  <button
                    data-variant="normal"
                    className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-orange-500 text-light border border-transparent hover:bg-accent-hover px-3 py-0 h-9 text-sm h-10 w-full"
                  >
                    Change gateway
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-light p-6 sm:p-8 lg:p-12">
            <div className="mb-6 grid gap-4 sm:grid-cols-2 md:mb-12 lg:grid-cols-4">
              <div className="rounded border border-border-200 px-5 py-4 shadow-sm">
                <h3 className="mb-2 text-sm font-semibold text-heading">
                  Order Number
                </h3>
                <p className="text-sm text-body-dark">334983046149</p>
              </div>
              <div className="rounded border border-border-200 px-5 py-4 shadow-sm">
                <h3 className="mb-2 text-sm font-semibold text-heading">
                  Date
                </h3>
                <p className="text-sm text-body-dark">December 1, 2022</p>
              </div>
              <div className="rounded border border-border-200 px-5 py-4 shadow-sm">
                <h3 className="mb-2 text-sm font-semibold text-heading">
                  Total
                </h3>
                <p className="text-sm text-body-dark">$55.10</p>
              </div>
              <div className="rounded border border-border-200 px-5 py-4 shadow-sm">
                <h3 className="mb-2 text-sm font-semibold text-heading">
                  Payment Method
                </h3>
                <p className="text-sm text-body-dark">STRIPE</p>
              </div>
            </div>
            <div className="mb-8 flex w-full items-center justify-center md:mb-12">
              <div
                data-overlayscrollbars-initialize=""
                className="os-theme-thin-dark h-full w-full"
                data-overlayscrollbars="host"
              >
                <div className="os-size-observer os-size-observer-appear">
                  <div className="os-size-observer-listener ltr"></div>
                </div>
                <div
                  className="os-viewport os-viewport-scrollbar-hidden mr-0 mb-0 ml-0 top-0 right-auto left-0  p-0 w-full"
                  // style="margin-right: 0px; margin-bottom: 0px; margin-left: 0px; top: 0px; right: auto; left: 0px; width: calc(100% + 0px); padding: 0px;"
                  // style={{ width: 'calc(100% + 0px)' }}
                >
                  <div className=" flex w-full flex-col py-7 md:flex-row md:items-start">
                    <div className="progress-box_progress_container___zzev">
                      <div className="progress-box_progress_wrapper___Kwhc progress-box_checked__SaJdX">
                        <div className="progress-box_status_wrapper__6S4IY">
                          <div className="h-4 w-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.894"
                              height="16"
                              viewBox="0 0 20.894 16"
                              className="w-full"
                            >
                              <path
                                data-name="_ionicons_svg_ios-checkmark (3)"
                                d="M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z"
                                transform="translate(-148.4 -173.6)"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="progress-box_bar__t1PIC"></div>
                      </div>
                      <div className="flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0">
                        <span className="text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center">
                          Order Pending
                        </span>
                      </div>
                    </div>
                    <div className="progress-box_progress_container___zzev">
                      <div className="progress-box_progress_wrapper___Kwhc">
                        <div className="progress-box_status_wrapper__6S4IY">
                          2
                        </div>
                        <div className="progress-box_bar__t1PIC"></div>
                      </div>
                      <div className="flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0">
                        <span className="text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center">
                          Order Processing
                        </span>
                      </div>
                    </div>
                    <div className="progress-box_progress_container___zzev">
                      <div className="progress-box_progress_wrapper___Kwhc">
                        <div className="progress-box_status_wrapper__6S4IY">
                          3
                        </div>
                        <div className="progress-box_bar__t1PIC"></div>
                      </div>
                      <div className="flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0">
                        <span className="text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center">
                          Order At Local Facility
                        </span>
                      </div>
                    </div>
                    <div className="progress-box_progress_container___zzev">
                      <div className="progress-box_progress_wrapper___Kwhc">
                        <div className="progress-box_status_wrapper__6S4IY">
                          4
                        </div>
                        <div className="progress-box_bar__t1PIC"></div>
                      </div>
                      <div className="flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0">
                        <span className="text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center">
                          Order Out For Delivery
                        </span>
                      </div>
                    </div>
                    <div className="progress-box_progress_container___zzev">
                      <div className="progress-box_progress_wrapper___Kwhc">
                        <div className="progress-box_status_wrapper__6S4IY">
                          5
                        </div>
                        <div className="progress-box_bar__t1PIC"></div>
                      </div>
                      <div className="flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0">
                        <span className="text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center">
                          Order Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable os-theme-dark">
                  <div className="os-scrollbar-track">
                    <div className="os-scrollbar-handle w-full"></div>
                  </div>
                </div>
                <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable os-theme-dark">
                  <div className="os-scrollbar-track">
                    <div className="os-scrollbar-handle h-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="mb-12 w-full lg:mb-0 lg:w-1/2 ltr:lg:pr-3 rtl:lg:pl-3">
                <h2 className="mb-6 text-xl font-bold text-heading">
                  Total Amount
                </h2>
                <div>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-5/12 text-sm font-semibold text-heading sm:w-4/12">
                      Sub Total
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                      $5.00
                    </span>
                  </p>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-5/12 text-sm font-semibold text-heading sm:w-4/12">
                      Shipping Charge
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                      $50.00
                    </span>
                  </p>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-5/12 text-sm font-semibold text-heading sm:w-4/12">
                      Tax
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                      $0.10
                    </span>
                  </p>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-5/12 text-sm font-semibold text-heading sm:w-4/12">
                      Discount
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                      $0.00
                    </span>
                  </p>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-5/12 text-sm font-semibold text-heading sm:w-4/12">
                      Total
                    </strong>
                    :
                    <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12">
                      $55.10
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 ltr:lg:pl-3 rtl:lg:pr-3">
                <h2 className="mb-6 text-xl font-bold text-heading">
                  Order Details
                </h2>
                <div>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-4/12 text-sm font-semibold text-heading">
                      Name
                    </strong>
                    :<span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 "></span>
                  </p>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-4/12 text-sm font-semibold text-heading">
                      Total Item
                    </strong>
                    :
                    <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">
                      1 Item
                    </span>
                  </p>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-4/12 text-sm font-semibold text-heading">
                      Delivery Time
                    </strong>
                    :
                    <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">
                      Express Delivery
                    </span>
                  </p>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-4/12 text-sm font-semibold text-heading">
                      Shipping Address
                    </strong>
                    :
                    <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">
                      mermoz, Dakar, Dakar, 38169, Sénégal
                    </span>
                  </p>
                  <p className="mt-5 flex text-body-dark">
                    <strong className="w-4/12 text-sm font-semibold text-heading">
                      Billing Address
                    </strong>
                    :
                    <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4">
                      Voluptatum qui sunt, Quod et consequatur, Ipsum qui minus
                      sint, 51397, Aut fugiat iusto do
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="rc-table orderDetailsTable w-full rc-table-fixed-header rc-table-scroll-horizontal">
                <div className="rc-table-container">
                  <div className="rc-table-header overflow-hidden">
                    {/* <table style={{tableLayout: "fixed"}}>
          <colgroup>
          <col style="width: 386.016px;">
          <col style="width: 154.406px;">
          <col style="width: 154.406px;">
          <col style="width: 216.172px;">
          <col style="width: 15px;">
          </colgroup>
          <thead className="rc-table-thead">
          <tr>
          <th title="Item" className="rc-table-cell rc-table-cell-ellipsis" style="text-align: left;">
          <span className="ltr:pl-20 rtl:pr-20">
          Item
          </span>
          </th>
          <th className="rc-table-cell" style="text-align: center;">
          Quantity
          </th>
          <th className="rc-table-cell" style="text-align: right;">
          Price
          </th>
          <th className="rc-table-cell" style="text-align: right;">
          </th>
          <th className="rc-table-cell rc-table-cell-scrollbar">
          </th>
          </tr>
          </thead>
          </table> */}
                    {/* </div> */}
                    <div
                      className="rc-table-body overflow-auto max-h[500px]"
                      // style="overflow: auto scroll; max-height: 500px;"
                      // style={{ overflow: 'auto', maxHeight: '500px' }}
                    >
                      {/* <table style="width: 350px; min-width: 100%; table-layout: fixed;">
          <colgroup>
          <col style="width: 250px;"><col style="width: 100px;">
          <col style="width: 100px;">
          <col style="width: 140px;">
          </colgroup>
          <tbody className="rc-table-tbody">
          <tr aria-hidden="true" className="rc-table-measure-row" style="height: 0px; font-size: 0px;">
          <td style="padding: 0px; border: 0px; height: 0px;">
          <div style="height: 0px; overflow: hidden;">
          &nbsp;
          </div>
          </td>
          <td style="padding: 0px; border: 0px; height: 0px;">
          <div style="height: 0px; overflow: hidden;">
          &nbsp;
          </div>
          </td>
          <td style="padding: 0px; border: 0px; height: 0px;">
          <div style="height: 0px; overflow: hidden;">
          &nbsp;
          </div>
          </td>
          <td style="padding: 0px; border: 0px; height: 0px;">
          <div style="height: 0px; overflow: hidden;">
          &nbsp;
          </div>
          </td>
          </tr>
          <tr data-row-key="2021-03-08T10:55:14.000000Z" className="rc-table-row rc-table-row-level-0 !cursor-auto">
          <td className="rc-table-cell rc-table-cell-ellipsis" style="text-align: left;">
          <div className="flex items-center">
          <div className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded">
          <img alt="Pepper" loading="lazy" decoding="async" data-nimg="fill" className="h-full w-full object-cover" sizes="(max-width: 768px) 100vw" srcset="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2Fconversions%2FMiniPeppers-thumbnail.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2Fconversions%2FMiniPeppers-thumbnail.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2Fconversions%2FMiniPeppers-thumbnail.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2Fconversions%2FMiniPeppers-thumbnail.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2Fconversions%2FMiniPeppers-thumbnail.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2Fconversions%2FMiniPeppers-thumbnail.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2Fconversions%2FMiniPeppers-thumbnail.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2Fconversions%2FMiniPeppers-thumbnail.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2Fconversions%2FMiniPeppers-thumbnail.jpg&amp;w=3840&amp;q=75" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" />
          </div>
          <div className="flex flex-col overflow-hidden ltr:ml-4 rtl:mr-4">
            <div className="mb-1 flex space-x-1 rtl:space-x-reverse">
              <a className="inline-block overflow-hidden truncate text-sm text-body transition-colors hover:text-accent hover:underline" href="/products/pepper" >
          Pepper
          </a>
          <span className="inline-block overflow-hidden truncate text-sm text-body">
            x
            </span>
            <span className="inline-block overflow-hidden truncate text-sm font-semibold text-heading">
              1lb
              </span>
              </div>
              <span className="mb-1 inline-block overflow-hidden truncate text-sm font-semibold text-accent">
                $5.00
                </span>
                </div>
                </div>
                </td>
                <td className="rc-table-cell" style="text-align: center;">
                  <p className="text-base">
                    1
                    </p>
                    </td>
                    <td className="rc-table-cell" style="text-align: right;">
                      <div>
                        $5.00
                        </div>
                        </td>
                        <td className="rc-table-cell" style="text-align: right;">
                          <button className="cursor-pointer text-sm font-semibold text-body transition-colors hover:text-accent">
                            Update review
                            </button>
                            </td>
                            </tr>
                           
                            {/* </tr> */}
                      {/* </tbody> */}
                      {/* </table>  */}
                      {/* </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* ////////////// CODE END ///////// */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* ///////First Div Complete After Body//////////////////// */}
    </div>
  )
}

export default page
