
const User = require("../models/user.model")


module.exports.getALLusers=(req, res) => {

User.find()
.then((ALLningas) => {
    res.json({student: ALLningas})
    
})
.catch(err => {
    res.json({message: "something is wrong ", err})
})
}

///CREATE
module.exports.CreateUser = (req, res) => {
    User.create(req.body)
    .then((newUser) => {
        res.json({student: newUser})
        
    })
    .catch(err => {
        res.json({message: "something is wrong ", err})
    })
}


/////readone
module.exports.oneUser = (req, res) => {

}
////update
module.exports.Update = (req, res) => {
}


////delete
module.exports.deleteUser = (req, res) => {
}