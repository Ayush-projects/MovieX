const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000


app.set("view engine", "ejs")

 
app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/bollywoodnews", (req, res)=>{
    res.render("bollywoodnews")
})

app.post("/login", async (req, res)=>{
    let email1 = req.body.email1
    let password1 = req.body.password1




})



app.listen(PORT, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("Server is running on PORT:", PORT)
})




