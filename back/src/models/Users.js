const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Users" , {
        UserName: {
            type: DataTypes.STRING,
            unique: true,
            notNull: true
        },
        password: {
            type: DataTypes.STRING,
            notNull: true
        },
        image: {
            type: DataTypes.STRING,
            unique: true
        },
        userLevel: {
            type: DataTypes.STRING,
        }
    })
}