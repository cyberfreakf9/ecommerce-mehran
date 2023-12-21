'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
export default function CheckOutDenied() {
  return (
    <>
      <h1 className="text-center mt-10 text-2xl font-semibold">
        Access Denied
      </h1>
      <div>
        <div className="flex flex-col justify-center items-center border rounded-md shadow-lg max-w-lg h-[100px] mx-auto">
          <p className="text-2xl text-orange-500 font-semibold mt-2 mb-5 px-5">
            You Need to Login First{' '}
          </p>
          <button
            type="button"
            className="border rounded-lg bg-orange-500  text-center px-6 py-1 shadow-md hover:bg-orange-400"
          >
            <Link
              href={'/signin'}
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
              {' '}
              Login{' '}
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}
