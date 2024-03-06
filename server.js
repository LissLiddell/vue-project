const express = require('express')
const mongoose = require('mongoose')
const app = express()

//routes

app.get('/',(req,res) => {
    res.send('Hello node API')
})

app.get('/blog',(req,res) => {
    res.send('Hello Block my name is lisset')
})

mongoose.set('strictQuery',false)
mongoose.
connect('mongodb+srv://Admin:ZDPXetouUHOB6IeQ@test1.e4czoye.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Test1')
.then(()=> {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node Api app is running on port 3000')
    })
}).catch(() => {
    console.log(error)
})
