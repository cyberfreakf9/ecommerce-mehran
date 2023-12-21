import { NextResponse } from 'next/server'
import db from '@/Utils/db'
import User from '@/models/users'
import bcrypt from 'bcryptjs'
export async function GET(request, { params }) {
  const { email } = params
  console.log(email)
  await db.connect()
  let user = []
  try {
    user = await User.findById(email)
    const { email, password } = user
  } catch (error) {
    NextResponse.json({ message: 'Users Not Found try again', success: false })
  }
  // validate email and password
  console.log({ email, password })
}
