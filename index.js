const express = require("express");

const app = express();


app.get('/hello/:username', (req,res) =>{
    console.log(typeof req.params.username)
    res.send(`hello ${req.params.username.toLocaleUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) =>{
    const{x,y} =req.params
    res.send(`result: ${ parseInt(x) + parseInt (y)}`)
})

app.get('/users/:username/photo', (req, res) =>{
    if (req.params.username === "sergio"){
        return res.sendFile('./sonic.png', {
            root: __dirname
        })
    }
    res.send('el usuario no tiene acceso')
})

app.get('/nombre/:nombre/age/:age' (req,res))
app.listen(3000);
console.log(`server on port ${3000}`);

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) =>{
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`server on port ${3000}`)
