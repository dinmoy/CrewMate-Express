const { DataTypes } = require('sequelize')

const Apply = (sequelize) => {
    return sequelize.define('apply_form', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        club_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'club',
                key: 'id',
            },
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        student_num: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone_num: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        question1: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        question2: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        question3: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    });
};
module.exports = Apply;