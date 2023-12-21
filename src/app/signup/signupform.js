'use client'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

const initialFormdata = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  role: 'user',
}

export default function Register() {
  const [formData, setFormData] = useState(initialFormdata)
  const router = useRouter()
  function isValidForm() {
    return formData &&
      formData.fname &&
      formData.fname.trim() !== '' &&
      formData.email &&
      formData.email.trim() !== '' &&
      formData.password &&
      formData.password.trim() !== ''
      ? true
      : false
  }
  return (
    <div className="bg-white relative">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-4xl font-medium text-center font-serif">
                Register
              </p>
              <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                {/*  First Name */}
                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    First Name
                  </p>
                  <input
                    placeholder="Your First Name"
                    type="text"
                    value={formData.fname}
                    onChange={(e) =>
                      setFormData({ ...formData, fname: e.target.value })
                    }
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                {/* Last Name */}
                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Last Name
                  </p>
                  <input
                    placeholder="Your Last Name"
                    type="text"
                    value={formData.lname}
                    onChange={(e) =>
                      setFormData({ ...formData, lname: e.target.value })
                    }
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Email
                  </p>
                  <input
                    placeholder="Your Email"
                    type="text"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Password
                  </p>
                  <input
                    placeholder="Your Email"
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <button
                  className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                     "
                  disabled={!isValidForm()}
                >
                  Register
                </button>
                <div className="flex flex-col gap-2">
                  <p>Already Registered ?</p>
                  <button
                    className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                     "
                    onClick={() => router.push('/signin')}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
