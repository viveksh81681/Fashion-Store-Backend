
const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

require("dotenv").config()

const PORT = process.env.PORT

const connect = require("./config/db")

const denimController = require("./controllers/denimController")
app.use("/" , denimController)

const topController = require("./controllers/topController")
app.use("/" , topController)

const kurtiController = require("./controllers/kurtiController")
app.use("/" , kurtiController)

const frockController = require("./controllers/frockController")
app.use("/" , frockController)

const jacketController = require("./controllers/jacketController")
app.use("/" , jacketController)

const middiController = require("./controllers/middiController")
app.use("/" , middiController)

const {register,login} = require("./controllers/userController")
app.post("/register",register)
app.post("/login",login)


app.listen(PORT ,async() => {

    try {    
        await connect();
        console.log("listening port 8080")

    } catch (e){
        console.log(e.message)
    }
})