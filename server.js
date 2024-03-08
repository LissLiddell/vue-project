const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product-model')
const app = express()


app.use(express.json())

//routes

app.get('/',(req,res) => {
    res.send('Hello node API')
})

app.get('/blog',(req,res) => {
    res.send('Hello Block my name is lisset')
})

app.post('/product',async(req,res)=>{
 try {
    const product = await Product.create(req.body)
    res.status(200).json(product);
 } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
 }
})


mongoose.set('strictQuery',false)
mongoose.
connect('mongodb+srv://Admin:ZDPXetouUHOB6IeQ@test1.e4czoye.mongodb.net/?retryWrites=true&w=majority&appName=Test1')
.then(()=> {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node Api app is running on port 3000')
    })
}).catch(() => {
    console.log(error)
})
