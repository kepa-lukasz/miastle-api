const express = require("express");
const port = 1200;
const cors = require("cors");

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

app.get("/api/quote", (req, res) => {
    res.send(
        {
            quote: "Sposobem na rozpoczęcie jest zaprzestanie mówienia i rozpoczęcie działania.",
            authors: [{ name: "Steve Jobs", author: false }, { name: "Walt disney", author: true }, { name: "Barack Obama", author: false }, { name: "Elżbieta II", author: false }]
        }
    );
})