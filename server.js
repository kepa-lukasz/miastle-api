const express = require("express");
const port = 1200;
const cors = require("cors");

const app = express()
app.use(cors())

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})

app.get("/api/quote", (req, res)=>{
    res.send({quote : "test", author : "if every push automatically redeploys app"});
})