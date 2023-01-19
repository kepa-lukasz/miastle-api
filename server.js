const express = require("express");
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
let counter = 0;

let miasta = {
    "Głubczyce": "opolskie",
    "Głogówek" : "opolskie",
    "Baborów" : "opolskie",
    "Kluczbork" : "opolskie",
    "Chrzanów" : "małopolskie",
    "Kaczory" : "wielkopolskie",
    "Kalisz" : "wielkopolskie",
    "Kamionka" : "lubelskie",
    "Karpacz" : "dolnośląskie",
    "Koniecpol" : "śląskie",
    "Koło" : "wielkopolskie",
    "Kleszczele" : "podlaskie"
}
let wojewodztwa =
{
    "łódzkie": [0, 0],
    "kujawsko-pomorskie": [0.5, 0],
    "pomorskie": [1.5, -0.5],
    "wielkopolskie": [0.5, -0.5],
    "śląskie": [-1.5, 0],
    "opolskie": [-1, -0.5],
    "małopolskie": [-2, 0.5],
    "podkarpackie": [-2, 1],
    "świętokrzyskie": [-1, 0.5],
    "lubelskie": [-0.5, 1],
    "mazowieckie": [0, 0.5],
    "warmińsko-mazurskie": [1.5, 0.5],
    "dolnośląskie": [-1, -1],
    "lubuskie": [0, -1],
    "zachodnio-pomorskie": [1, -1],
    "podlaskie": [1, 1]
}

app.get("/get/wojewodztwa", (req, res)=>{
   res.send({wojewodztwa : Object.keys(wojewodztwa)});
})



app.get("/get/randomcity", (req, res) => {
    let cities = Object.keys(miasta);
    let idx = Math.floor(Math.random() * (cities.length) ) ;
    res.send({"city" : cities[idx]})
})
app.get("/get/wincounter", (req, res)=>{
    res.send({"wins" : counter});
})


app.post("/post/guess", (req, res) => {
    try{
        let searched =  miasta[req.body.city];
        let attempt =  req.body.attempt; 
        
        let kierunekX = wojewodztwa[searched][0] - wojewodztwa[attempt][0]
        let kierunekY = wojewodztwa[searched][1] - wojewodztwa[attempt][1]
        let arrX = (kierunekY == 0) ? "+" : (kierunekY < 0) ? "left" : "right";
        let arrY = (kierunekX == 0) ? "+" : (kierunekX < 0) ? "bottom" : "top";
        if(arrX == "+" && arrY == "+"){
            counter++;
        }
        res.send({code : 200, result : `${arrX} ${arrY}`});
    }
    catch{
        res.send({code : 404, result : "doesnt exist"})
    }
})