'use client'
import React, { useContext, useState } from 'react'
import { submitFile } from '../../../../actions/formAction'
import { GlobalContext } from '@/context'
const Selecbox = () => {
  const { path, setPath } = useContext(GlobalContext)
  const [cfile, setcFile] = useState()
  let car
  let filter
  let brand
  let fullpath
  const onSubmit = () => {
    let fpath
    if (car == '') {
      alert('Please select car first')
      return
    } else if (filter == '') {
      alert('Please select filter first')
      return
    } else if (brand == '') {
      alert('Please Slect brand first')
      return
    } else {
      // alert(fpath)
      // car = ''
      // filter = ''
      // brand = ''
      fpath =
        './public/' + 'images/' + 'product/' + car + '/' + filter + '/' + brand
      // alert(fpath)
      // fullpath = fpath
      // setPath(`/images/product/${car}/${filter}/${brand}/`)
      car = ''
      filter = ''
      brand = ''
      return fpath
    }
  }
  // let filepath = onSubmit()
  const check = () => {
    fullpath = onSubmit()
    return alert(fullpath)
  }
  // let imagePath = path + '/' + cfile
  // setPath(imagePath)
  return (
    <div className="flex ">
      {/* file box code start */}
      <div>
        <form
          action={async (formData) => {
            await submitFile(formData, fullpath)
          }}
        >
          <input
            type="file"
            placeholder="/images/product/"
            name="image"
            // onChange={(e) => {
            //   setcFile(e.target.files[0])
            // }}
            className="w-[300px] md:w-[300px] h-12 border border-transparent rounded-md focus:outline-none bg-white"
          ></input>
          <button
            type="submit"
            className="px-4 py-2 cursor-pointer border border-slate-100 rounded-md bg-slate-200"
          >
            Upload
          </button>
        </form>
      </div>
      {/* file box code end */}
      <div>
        <span className="mx-2 inline-block  md:block">Car</span>{' '}
      </div>
      <div>
        <select onChange={(e) => (car = e.target.value)} defaultValue={car}>
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
        <select onChange={(e) => (brand = e.target.value)} defaultValue={brand}>
          <option value="0">Select Brand:</option>
          <option value="brotherstar">Brother Star</option>
          <option value="guard">Guard</option>
          <option value="local">Local</option>
          <option value="china">China</option>
          <option value="genuine">Genuine</option>
        </select>
      </div>
      {/* code for upload path button */}
      <div className="mx-auto">
        <button
          className="px-2 py-1 mt-2  bg-orange-500 hover:bg-orange-400 rounded-md focus:outline-none cursor-pointer shadow-md"
          type="button"
          onClick={() => {
            check()
          }}
        >
          Add Path
        </button>
      </div>
      {/* code end for upload path button */}
    </div>
  )
}

export default Selecbox
