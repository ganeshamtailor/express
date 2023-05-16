const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/hello-world',(req, res) => {
    res.send('hello world')
})

app.post('/new-request',(req,res)=>{
    res.send(req.body)
})

app.listen('3300', ()=>{
    console.log('listen at 3000')
})