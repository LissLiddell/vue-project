const express = require('express')
const app = express()

//routes

app.get('/',(req,res) => {
    res.send('Hello node API')
})

app.get('/blog',(req,res) => {
    res.send('Hello Block my name is lisset')
})

app.listen(3000, ()=> {
    console.log('Node Api app is running on port 3000')
})