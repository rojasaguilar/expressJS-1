const express = require('express')
const nodemon = require('nodemon')

const app = express();

app.use(express.json());

app.get('/' , (req,res) => {
    res.json('hello')
})

app.get('/home' , (req,res) => {
    console.log(req)
    res.json('hello')
})

app.listen(8899,() => {
    console.log("listening in the port 8899..")
})


