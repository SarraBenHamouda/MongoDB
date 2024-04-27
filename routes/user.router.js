const UserController = require("../controlllers/user.controller")





module.exports = (app) => {
///////////READ ALL //////////////

app.get("/api/users", UserController.getALLusers);
/////////////CREATE

app.post("/api/users",UserController.CreateUser);

////////READ ONE

app.get("/api/users/:id", UserController.oneUser);
///// UPDATE
app.put("/api/users/:id",UserController.Update);
//////DELETE 
app.delete("/api/users/:id", UserController.deleteUser);

}