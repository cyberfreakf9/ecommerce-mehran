import User from '@/models/users'
import { NextResponse } from 'next/server'
import db from '@/Utils/db'
export async function GET(request, { params }) {
  //   db.connect()
  const { userId } = params
  await db.connect()
  let user = []
  try {
    user = await User.findById(userId)
  } catch (error) {
    NextResponse.json({ message: 'Users Not Found try again', success: false })
  }
  return NextResponse.json(user, { message: 'Completed', success: true })
}
