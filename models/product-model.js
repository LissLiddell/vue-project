const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
          type: Number,
          required: true,
          default: 0  
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        // create to ad and apudate 
        timestamps: true
    }
)


const Product = mongoose.model('Product',productSchema); 

module.exports = Product;