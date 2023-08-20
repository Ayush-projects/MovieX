const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000


app.set("view engine", "ejs")

 
app.get("/", (req, res)=>{
    res.render("index")
})






app.listen(PORT, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("Server is running on PORT:", PORT)
})




