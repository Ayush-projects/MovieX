const express = require('express')
const app = express()
const dotenv = require('dotenv')
const fetch = require('cross-fetch')
dotenv.config()
const PORT = process.env.PORT || 3000


app.set("view engine", "ejs")

 
app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/bollywoodnews", (req, res)=>{
    res.render("bollywoodnews")
})

app.get("/bollywoodnewsjson", (req, res)=>{
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey="+process.env.apikey).then((resp)=>{
            return resp.json()
        }).then((fres)=>{res.json(fres)})
})


app.listen(PORT, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("Server is running on PORT:", PORT)
})




