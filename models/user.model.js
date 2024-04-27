const mongoose = require ("mongoose")
 const UserSchema = new mongoose.Schema({
    name : {
        type:String
    }, 
    home_state :{
        type:String

    },
    lucky_number:{
        type:Number
    },
    month:{
        type:Number
    },
    year:{
        type:Number
    },
    day:{
        type:Number
    }
 })
 const User = mongoose.model("User",UserSchema)
module.exports = User