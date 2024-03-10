const { DataTypes } = require('sequelize')

const Apply = (sequelize) => {
    return sequelize.define('apply_form', {
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
        student_num:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        phone_num:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        answer1: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        answer2: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        answer3: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
    });
};
module.exports = Apply;