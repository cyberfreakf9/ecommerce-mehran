import Product from '@/models/product'
import { NextResponse } from 'next/server'
import db from '@/Utils/db'
export async function GET() {
  await db.connect()
  let product = []
  try {
    product = await Product.find()
  } catch (error) {
    NextResponse.json({
      message: 'Product Not Found try again',
      success: false,
    })
  }
  return NextResponse.json(product, { message: 'Completed', success: true })
}
export async function POST(request) {
  await db.connect()
  const {
    name,
    description,
    price,
    category,
    brand,
    car,
    model,
    onSale,
    sprice,
    priceDrop,
    imageUrl,
  } = await request.json()
  const product = new Product({
    name,
    description,
    price,
    category,
    brand,
    car,
    model,
    onSale,
    sprice,
    priceDrop,
    imageUrl,
  })
  try {
    const createUser = await product.save()
    const response = new NextResponse(
      product,
      {
        message: 'Product Created',
        success: true,
      },
      { status: 200 }
    )
    return response
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'failed to create User' },
      { status: 401 }
    )
  }
}
export function DELETE(request, resp) {
  return NextResponse.json(
    { message: 'Record Deleted', status: true },
    { status: 200 }
  )
}
