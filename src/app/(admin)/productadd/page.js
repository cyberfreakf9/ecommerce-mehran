import React, { FormEvent } from 'react'
// import { writeFile } from 'fs/promises'
import { RiProductHuntFill } from 'react-icons/ri'
import { AiOutlineGift, AiOutlineHome } from 'react-icons/ai'
import { FcSalesPerformance } from 'react-icons/fc'
import { FiUsers } from 'react-icons/fi'
import { BiMessageRounded } from 'react-icons/bi'
import { IoIosArrowDropdown } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Selecbox from './selecbox'
import ImageBox from './imageBox'
const ProductAdd = () => {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="flex relative bg-gray-200 max-w-full shadow-md ">
        <div
          className={`hidden
           md:block h-screen absolute top-2 left-2 bg-gray-700 justify-center text-white border rounded-lg shadow-md w-[200px]`}
        >
          <p className="text-center">Dashboard</p>
          <div className="flex flex-col ">
            <div className="flex hover:bg-slate-400  ">
              <div>
                {/* <RiProductHuntFill size={24} /> */}
                <AiOutlineHome size={24} />
              </div>
              <div
                className="px-2 border border-transparent
           rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
              >
                <Link href={'/dashboard'}>Home</Link>
              </div>
            </div>
            <div className="flex">
              <div>
                <AiOutlineGift size={24} />
              </div>
              <div
                className="px-2 border border-transparent
           rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
              >
                Orders
              </div>
            </div>
            <div className="flex">
              <div>
                <FcSalesPerformance size={24} />
              </div>
              <div
                className="px-2 border border-transparent
           rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
              >
                Sales
              </div>
            </div>
            <div className="flex">
              <div>
                <FiUsers size={24} />
              </div>
              <div
                className="px-2 border border-transparent
           rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
              >
                Users
              </div>
            </div>
            <div className="flex">
              <div>
                <BiMessageRounded size={24} />
              </div>
              <div
                className="px-2 border border-transparent
           rounded-sm bg-gray-600 w-full active:bg-gray-500 cursor-pointer hover:bg-slate-400"
              >
                Messages
              </div>
            </div>
          </div>
        </div>
        {/* end side nav */}
        <div
          className={`absolute left-0 md:left-[210px]
         overflow-y-auto  top-2 rounded-lg flex flex-col w-full`}
        >
          <div className="flex mt-5 w-full">
            <div className=" shadow-md mx-auto md:ml-10 w-2/3 mr-5">
              <div className="flex mb-2 ">
                {' '}
                <div>
                  <span className="mx-2">Product Title</span>{' '}
                  <input
                    type="text"
                    placeholder="Product Title"
                    className="w-[300px] md:w-[600px] h-12 border border-transparent rounded-md focus:outline-none bg-white"
                  ></input>
                </div>
              </div>
              {/* product image */}
              <div className="flex items-center ">
                {' '}
                <div>
                  <span className="mr-10 hidden md:block">Product Image</span>{' '}
                </div>
                {/* <div>
                  <form>
                    <input
                      type="file"
                      placeholder="/images/product/"
                      name="file"
                      onChange={(e) => {
                        setFile(e.target.files[0])
                      }}
                      className="w-[300px] md:w-[300px] h-12 border border-transparent rounded-md focus:outline-none bg-white"
                    ></input>
                    <button
                      type="submit"
                      className="px-4 py-2 cursor-pointer border border-slate-100 rounded-md bg-slate-200"
                    >
                      Upload
                    </button>
                  </form>
                </div> */}
                {/* <div>
                <span className="px-4 py-2 cursor-pointer border border-slate-100 rounded-md bg-slate-200">
                  ...
                </span>
              </div> */}
              </div>
              {/* car type brand  */}
              {/* <div className="flex ">
                <div>
                  <span className="mx-2 inline-block  md:block">Car</span>{' '}
                </div>
                <div>
                  <select
                    onChange={(e) => (car = e.target.value)}
                    defaultValue={car}
                  >
                    <option value="0">Select car:</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="honda">Honda</option>
                    <option value="toyota">Toyota</option>
                    <option value="kia">Kia</option>
                    <option value="daihatsu">Daihatsu</option>
                    <option value="hayndai">Haundai</option>
                    <option value="nissan">Nissan</option>
                    <option value="mazda">Mazda</option>
                    <option value="faw">Faw</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div>
                  <span>Type</span>
                </div>
                <div>
                  {' '}
                  <select
                    onChange={(e) => (filter = e.target.value)}
                    defaultValue={filter}
                  >
                    <option value="0">Select Filter:</option>
                    <option value="airfilter">Air Filter</option>
                    <option value="oilfilter">Oil Filter</option>
                    <option value="acfilter">Ac Filter</option>
                  </select>
                </div>
                <div>Brand</div>
                <div>
                  <select
                    onChange={(e) => (brand = e.target.value)}
                    defaultValue={brand}
                  >
                    <option value="0">Select Brand:</option>
                    <option value="brotherstar">Brother Star</option>
                    <option value="guard">Guard</option>
                    <option value="local">Local</option>
                    <option value="china">China</option>
                    <option value="genuine">Genuine</option>
                  </select>
                </div>
              </div> */}
              <Selecbox />
              {/* model  */}
              <div className="flex items-center">
                <div>
                  <span>Model</span>
                </div>
                <input
                  type="text"
                  placeholder="Car Model"
                  className="ml-2 w-[300px] md:w-[600px] h-12 border border-transparent rounded-md focus:outline-none bg-white"
                ></input>
              </div>
              <div className="flex items-center">
                <div>
                  <span>Price</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Price"
                    className="ml-2 w-10  h-12 border border-transparent rounded-md focus:outline-none bg-white"
                  ></input>
                </div>
                <div>
                  <span> Sale Price</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Price"
                    className="ml-2 w-10  h-12 border border-transparent rounded-md focus:outline-none bg-white"
                  ></input>
                </div>
                <div>
                  <span> Qty</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Price"
                    className="ml-2 w-10  h-12 border border-transparent rounded-md focus:outline-none bg-white"
                  ></input>
                </div>
                <div>
                  <span> Rating</span>
                </div>
                <div>
                  <select>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </select>
                </div>
                <div>
                  <span> Review</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="0"
                    className="ml-2 w-10  h-12 border border-transparent rounded-md focus:outline-none bg-white"
                  ></input>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <span>Stock</span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Stock"
                    className="ml-2 w-10  h-12 border border-transparent rounded-md focus:outline-none bg-white"
                  ></input>
                </div>
              </div>
            </div>
            <div className=" shadow-md mx-auto md:ml-10 w-1/3">
              {/* <div className="w-full h-full bg-gray-200">
                <img src="/images/filter2.png" width={200} height={200} />
              </div> */}
              <ImageBox />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ProductAdd
