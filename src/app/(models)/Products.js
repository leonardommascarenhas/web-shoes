import mongoose, { Schema } from 'moongoose'

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const productsSchema = new Schema(
    {
        id: Number,
        title: String,
        description: String,
        image: String,
        price: Number,
    },
    {
        timestamps: true,
    }
)

const Products = mongoose.models.Product || mongoose.model('Products', productsSchema)
export default Products
