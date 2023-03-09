const {Services, Users} = require("../db")

async function getData(data){
    if(data){
        const db = await Services.findAll()
        const query = await db.find(value => value.name.toLowerCase() === data.toLowerCase())
        return query
    }else{
        const allServices = await Services.findAll() 
        return allServices
    }
}

async function getDataUser(name){
    if(name){
        const db = await Users.findAll()
        const result = await db.find(value => value.UserName.toLowerCase() === name.toLowerCase())
        return result
    }else{
        const result = await Users.findAll()
        return result
    }
}

module.exports = {
    getData,
    getDataUser
}