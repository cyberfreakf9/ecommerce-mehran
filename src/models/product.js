import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    category: String,
    brand: String,
    car: String,
    modal: String,
    onSale: Boolean,
    sprice: Number,
    priceDrop: Number,
    imageUrl: String,
  },
  { timestamps: true }
)

const Product =
  mongoose.models.Products || mongoose.model('Products', ProductSchema)

export default Product
