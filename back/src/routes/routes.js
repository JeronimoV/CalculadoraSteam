const express = require("express")
const app = express()
const {getData} = require("../controllers/getData")
const {Services} = require("../db")

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

module.exports = app;