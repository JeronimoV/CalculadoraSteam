const { conn } = require("./src/db")
const app = require("./src/server")
const express = require("express")
const PORT = 3001
const fs = require('fs');
const path = require('path');

conn.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log("Server iniciado"))
})