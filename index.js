const express = require('express')
const app = express()
const dotenv = require('dotenv')
const fetch = require('cross-fetch')
const bcrypt = require('bcrypt')
dotenv.config()
const PORT = process.env.PORT || 3000


app.set("view engine", "ejs")
app.use(express.json())
 
app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/bollywoodnews", (req, res)=>{
    res.render("bollywoodnews")
})

app.post("/login", async (req, res)=>{
    let email1 = req.body.email1
    let password1 = req.body.password1

    console.log(email1,password1)
   res.json({msg: 'Data received'})

})

app.post("/signup", async (req, res)=>{
    let email2 = req.body.email2
    let password2 = req.body.password2

    console.log(email2,password2)
   res.json({msg: 'Data received'})

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




