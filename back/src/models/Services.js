const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Services" , {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        image: {
            type: DataTypes.STRING,
            unique: true
        },
        price: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        }
    })
}