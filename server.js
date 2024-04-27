const express = require("express")
const app = express()
const PORT = 8000 ;




app.use(express.json(), express.urlencoded({extended: true}))

require("./config/mongoose.config")

const UsersRoutes = require("./routes/user.router")



UsersRoutes(app)



app.listen(PORT,() => {
    console.log(`>>>>> the server is ruuning on PORT ${PORT}`)

})