//import mongoose here to config bd
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27027/my_first_db")
.then(()=>{console.log("finnaly connect to our db")})
.catch(err => {console.log("something went wrong", err)})