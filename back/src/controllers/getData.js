const {Services} = require("../db")

async function getData(data){
    if(data){
        const query = await Services.find(value => value.name === data)
        return query
    }else{
        const allServices = await Services.findAll() 
        return allServices
    }
}

module.exports = {
    getData
}