import React from 'react'
import Footer from '@/components/footer'
// import { FaAlignJustify } from 'react-icons/fa'
import Adminnavcomponent from './adminnavcomponent'
export default function Layout({ children }) {
  return (
    <div className="bg-gray-100">
      <nav>
        <Adminnavcomponent />
      </nav>
      {children}
      {/* <Footer /> */}
    </div>
  )
}
