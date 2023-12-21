'use client'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
const Logout = () => {
  const [isShow, isSetShow] = useState(false)
  const ShowLogout = () => {
    const logout = document.getElementById('logout')
    if (!isShow) {
      logout.classList.add('show')
      logout.classList.remove('hide')
      isSetShow(true)
    } else {
      logout.classList.add('hide')
      logout.classList.remove('show')
      isSetShow(false)
    }
  }
  return (
    <div onClick={ShowLogout}>
      {/* <span
        onClick={() => {
          signOut()
        }}
      >
        <Link href={'/checkout'}>Logout</Link>
      </span> */}
      <span>LogOut</span>
      <div
        className="hide absolute top-10 left-0 -translate-x-6 z-10 bg-gray-700 px-2 py2 border rounded-md shadow-md"
        id="logout"
      >
        <div className="mb-2 px-2">
          <span
            onClick={() => {
              signOut()
            }}
          >
            <Link href={'/'}>Logout</Link>
          </span>
        </div>
        <div className="mb-2 px-2">Profile</div>
      </div>
    </div>
  )
}

export default Logout
