const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/post", (req, res) => {
    console.log(req.body);
    fs.readFile(path.resolve(__dirname, './data/data.js'), (err, data) => {
        if(err) throw err;
        const arr = JSON.parse(data);
        arr.push(req.body);
        fs.writeFile(path.resolve(__dirname, './data/data.js'), JSON.stringify(arr, null, 4), (err, data) => {
            if(err) throw err;
            console.log("Data added")
        })
    })
    res.json("OK");
})

app.listen(8888, console.log(8888));