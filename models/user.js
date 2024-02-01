const { DataTypes } = require('sequelize');
const { DataTypes } = require('sequelize');
const { DataTypes } = require('sequelize');

const User = (sequelize) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            PrimaryKey: true,
            AutoIncrement: true,
            allowNull: true
        },
        name: {
            type: DataTypes.VARCHAR(20),
            allowNull: false,
        },
        email:{
            type:DataTypes.VARCHAR(20),
            allowNull:false
        },
        password:{
            type:DataTypes.VARCHAR(255),
            allowNull:false
        }
    })
}
module.exports=User;