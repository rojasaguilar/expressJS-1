const express = require('express')
const fs = require('fs')



//EXPRESS CONFIGURATION
const app = express();
app.use(express.json());


//ROUTES 
app.get('/people' , (req,res) => {
   fs.readFile('./people.json',(err,data) => {
    const people = JSON.parse(data)
     res.json(people)
})
   
})

app.get('/home' , (req,res) => {
    console.log(req.query.id)
    res.json('hello')
})

//SERVER LISTENER
app.listen(8899,() => {
    console.log("listening in the port 8899..")
})


