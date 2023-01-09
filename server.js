const express = require("express");
const app = express()
const port = 1200;

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})

app.get("/api/quote", (req, res)=>{
    res.send({quote : "jakiś tekst", author : "pewien aktor"});
})