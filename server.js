const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product-model')
const app = express()


app.use(express.json())
// if you dont want instead by json
app.use(express.urlencoded({extended: false}))

//routes

app.get('/',(req,res) => {
    res.send('Hello node API')
})

app.get('/blog',(req,res) => {
    res.send('Hello Block my name is lisset')
})

// select
app.get('/products',async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//update o patch
app.put('/product/:id', async(req,res)=>{
    try {
       const{id} = req.params; 
       const product = await Product.findByIdAndUpdate(id,req.body)
       // cannot find any product in database
       if(!product){
        return res.status(404).json({message: `cannot find any product with ID ${id}`})
       }
       const updatedProduct = await Product.findById(id);
       res.status(200).json(updatedProduct); 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//delete a product
app.delete('/product/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with id ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/product/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);        
    } catch (error) {
        es.status(500).json({message: error.message})
    }
})

//insert
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
