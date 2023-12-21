import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100">
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      {children}
    </div>
  )
}
