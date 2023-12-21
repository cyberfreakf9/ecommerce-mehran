import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'
const Adminnavcomponent = () => {
  return (
    <div>
      <ul className="flex ">
        <li className="px-2">Home</li>
        <li className="px-2">Show</li>
        <li className="px-2 md:hidden ">
          <FaAlignJustify size={24} />
        </li>
      </ul>
    </div>
  )
}

export default Adminnavcomponent
