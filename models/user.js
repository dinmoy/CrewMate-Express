
const {DataTypes} = require('sequelize');

const User = (sequelize) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        password:{
            type:DataTypes.STRING(255),
            allowNull:false
        }
    })
}
module.exports=User;