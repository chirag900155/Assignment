import mongoose from "mongoose";

const productList =  mongoose.Schema({
    name: String,
    price: String
})

const product = mongoose.model('product', productList)
export default product