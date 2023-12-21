import React from 'react'

const FilterByproduct = () => {
  return (
    <div>
      <div className="product-filter flex items-center justify-between md:justify-around mt-2 mb-3">
        <h1>Search By Categories</h1>
        <div className="sort flex md:mx-5 ">
          <div className="collection-sort flex flex-col md:mx-5">
            <label>Cars</label>
            <select>
              <option value="/">Suzuki</option>
              <option value="/">Toyota</option>
              <option value="/">Honda</option>
              <option value="/">Daihatsu</option>
              <option value="/">Faw</option>
              <option value="/">Kia</option>
              <option value="/">Mazda</option>
            </select>
          </div>
          <div className="collection-sort flex flex-col  md:mx-5 ">
            <label>Models</label>
            <select>
              <option value="/">Civic</option>
              <option value="/">City</option>
              <option value="/">Cultus</option>
              <option value="/">Alto</option>
              <option value="/">Corolla</option>
              <option value="/">WagonR</option>
              <option value="/">Aqua</option>
              <option value="/">Mehran</option>
              <option value="/">Coure</option>
              <option value="/">Hiroof</option>
            </select>
          </div>
          {/* filter type */}
          <div className="collection-sort flex flex-col  md:mx-5 ">
            <label>Filter</label>
            <select>
              <option value="/">Air </option>
              <option value="/">Oil</option>
              <option value="/">Ac</option>
              <option value="/">Fuel</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterByproduct
