import User from '@/models/users'
import { NextResponse } from 'next/server'
import db from '@/Utils/db'
import bcrypt from 'bcryptjs'
export async function GET() {
  await db.connect()
  let users = []
  try {
    users = await User.find()
  } catch (error) {
    NextResponse.json({ message: 'Users Not Found try again', success: false })
  }
  return NextResponse.json(users, { message: 'Completed', success: true })
}
export async function POST(request) {
  await db.connect()
  const { name, email, password, isAdmin } = await request.json()
  const hashedPassword = await bcrypt.hash(password, 6)
  const user = new User({
    name,
    email,
    password: hashedPassword,
    isAdmin,
  })
  try {
    const createUser = await user.save()
    const response = NextResponse(
      user,
      { message: 'User Created' },
      { status: 200 }
    )
    return response
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'failed to create User' },
      { status: false }
    )
  }
}
export function DELETE(request, resp) {
  return NextResponse.json(
    { message: 'Record Deleted', status: true },
    { status: 200 }
  )
}
