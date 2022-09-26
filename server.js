const express = require("express");
const dotenv = require('dotenv');
const app = express();
const router=require("./routes/routers")
const db = require("./config/database")



require('dotenv').config();
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
app.use(express.static('public'))
//select the Template engine
app.set("view engine" , "ejs")

 app.use("/post",router)
 app.get('/', (req, res) => {
    res.render("home")
})

app.listen(PORT, () => { 
    
    console.log(`Server is running on http://localhost:${PORT}`)
})

