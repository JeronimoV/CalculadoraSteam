const express = require("express")
const app = express()
const {getData, getDataUser} = require("../controllers/getData")
const {Services, Users} = require("../db")

app.get("/" , async (req, res) => {
    const {service} = req.query
    try {
        if(service){
            const result = await getData(service)
            res.status(200).json(result)
        }else{
        const result = await getData()
        res.status(200).json(result)
    }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get("/users" , async (req, res) => {
    try {
        const result = await getDataUser()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get("/users/:name" , async (req, res) => {
    const {name} = req.params
    try {
        const dataUsers = await getDataUser(name)
        res.status(200).json(dataUsers)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


app.post("/create", async(req, res) => {
    const {name, image, price, description} = req.body
    try {
        if(name && image && price && description){
            const newService = await Services.create({
                name,
                image,
                price,
                description
            })
            res.status(200).json(newService)
    }else{
        throw new Error("Faltan datos")
    }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.post("/register", async(req, res) => {
    const {UserName, password, image, userLevel} = req.body
    try {
        if(UserName && image && userLevel && image){
            const newUser = await Users.create({
                UserName,
                password,
                image,
                userLevel
            })
            res.status(200).json(newUser)
    }else{
        throw new Error("Faltan datos")
    }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = app;