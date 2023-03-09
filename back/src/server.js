const express = require("express")
const app = express()
const morgan = require("morgan")
const routes = require("./routes/routes")

app.use(morgan("dev"))
app.use(express.json())


app.use("/", routes)

module.exports = app;


