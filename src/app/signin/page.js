import React from 'react'
import Login from './signinform'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
export default async function page() {
  const session = await getServerSession()
  if (session) {
    redirect('/')
  }
  // return (
  //   <div>
  //     <Login />
  //   </div>
  // )
  return <Login />
}
