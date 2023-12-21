'use client'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { FormEvent } from 'react'
import { NextResponse } from 'next/server'
const initialFormdata = {
  email: '',
  password: '',
}
export default function Login() {
  const router = useRouter()
  const [frmData, setfrmData] = useState(initialFormdata)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })
    console.log({ response })
    if (!response?.error) {
      router.push('/')
      router.refresh()
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto max-w-md mt-10"
    >
      <input
        className="border border-black rounded-md leading-10 mb-2"
        type="email"
        name="email"
        // value={frmData.email}
        // placeholder="Your Name"
        // onChange={(e) => {
        //   setfrmData({ ...frmData, email: e.target.value })
        // }}
      ></input>
      <input
        className="border border-black rounded-md leading-10 mb-2"
        type="password"
        name="password"
        // value={frmData.password}
        // onChange={(e) => {
        //   setfrmData({ ...frmData, password: e.target.value })
        // }}
      ></input>
      <button
        className="bg-orange-500 text-black px-5 py-2 border border-transparent rounded-md"
        type="submit"
      >
        Login
      </button>
    </form>
  )
}

// export default function Login() {
//   const [formData, setFormData] = useState(initialFormdata)
//   const router = useRouter()
//   function isValidForm() {
//     return formData &&
//       formData.email &&
//       formData.email.trim() !== '' &&
//       formData.password &&
//       formData.password.trim() !== ''
//       ? true
//       : false
//   }
//   const onSubmit = async () => {
//     const result = await signIn('credentials', {
//       email: formData.email,
//       password: formData.password,
//       redirect: false,
//       // callbackUrl: '/checkout',
//     })
//     // alert('hello')
//   }
//   return (
//     <div className="bg-white relative">
//       <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
//         <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
//           <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
//             <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
//               <p className="w-full text-4xl font-medium text-center font-serif">
//                 Login
//               </p>
//               <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
//                 <div className="relative">
//                   <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
//                     Email
//                   </p>
//                   <input
//                     placeholder="Your Email"
//                     type="text"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
//                   />
//                 </div>
//                 <div className="relative">
//                   <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
//                     Password
//                   </p>
//                   <input
//                     placeholder="Your Email"
//                     type="password"
//                     value={formData.password}
//                     onChange={(e) =>
//                       setFormData({ ...formData, password: e.target.value })
//                     }
//                     className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
//                   />
//                 </div>

//                 <button
//                   className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg
//                      text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
//                      "
//                   disabled={!isValidForm()}
//                   onClick={() => {
//                     onSubmit()
//                   }}
//                 >
//                   Login
//                 </button>
//                 <div className="flex flex-col gap-2">
//                   <p>New to website ?</p>
//                   <button
//                     className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg
//                      text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
//                      "
//                     onClick={() => router.push('/signup')}
//                   >
//                     Register
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
