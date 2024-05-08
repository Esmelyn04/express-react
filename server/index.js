// import express into our file
const express = require('express')

// create a new express applicaction
const app = express()

// define the port our server will run on
const port = 3000

// allow static assets in public folder
app.use(express.static('public'))

// React app as the root route
const root = require('path').join(__dirname, '../client','dist')
app.use(express.static(root))

// define our server routes
app.get('/', (req, res)=>{
    // do something when the server processes this request

    // send back a response to the client
    res.sendFile("index.html", {root})
})

app.get('/message', (req, res)=>{
    // do something when the server processes this request

    // send back a response to the client
    res.send("Hello from our server!!!!")

})

app.get('/test', (req, res)=>{
    // do something when the server processes this request

    // send back a response to the client
    res.send("Server is operational")
})

// run our server to listen at the port we defined
app.listen(port, ()=>{
    console.log(`Server in running on port ${port}`)
})


