const express = require("express");
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
//win counter
let counter = 0;

wojewodztwa = {
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

//returns object with wins amount or -1
const readWins = () => {
    try {
        let counter = fs.readFileSync('./files/counter.json', 'utf8');
        return counter;
    }
    catch {
        return ({ "wins": -1 });
    }

}
//counter++, save in file
const addToCounter = () => {
    try {
        counter = JSON.parse(readWins()).wins
        if (counter != -1) {
            counter++
            let obj = `{"wins" : ${counter}}`
            fs.writeFileSync('files/counter.json', obj);
        }
        else {
            console.log("error")
        }
    }
    catch {
        console.log("file error")
    }

}

app.get("/get/wojewodztwa", (req, res) => {
    res.send({ wojewodztwa: Object.keys(wojewodztwa) });
})


//returns random city from file
app.get("/get/randomcity", (req, res) => {
    try {
        let miasta = fs.readFileSync('files/miasta.json', 'utf8');
        miasta = JSON.parse(miasta);
        let cities = Object.keys(miasta);
        let idx = Math.floor(Math.random() * (cities.length));
        res.send({ "city": cities[idx] })
    }
    catch {
        res.send({ wojewodztwa: "Wystąpił problem po stronie serwera" });
    }
})
//returns in count from file
app.get("/get/wincounter", (req, res) => {
    res.send(readWins());
})


app.post("/post/guess", (req, res) => {
    try {
        //get cities
        let miasta = fs.readFileSync('files/miasta.json', 'utf8');
        miasta = JSON.parse(miasta);
        //get indexes to calculate direction
        let searched = miasta[req.body.city];
        let attempt = req.body.attempt;
        //calculates direction
        let kierunekX = wojewodztwa[searched][0] - wojewodztwa[attempt][0]
        let kierunekY = wojewodztwa[searched][1] - wojewodztwa[attempt][1]
        //directions 
        let arrX = (kierunekY == 0) ? "+" : (kierunekY < 0) ? "left" : "right";
        let arrY = (kierunekX == 0) ? "+" : (kierunekX < 0) ? "bottom" : "top";
        //if game won, counter++
        if (arrX == "+" && arrY == "+") {
            addToCounter()
        }
        res.send({ code: 200, result: `${arrX} ${arrY}` });
    }
    catch {
        res.send({ code: 404, result: "doesnt exist" })
    }
})