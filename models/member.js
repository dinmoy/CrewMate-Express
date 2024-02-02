const { DataTypes } = require('sequelize')

const Member = (sequelize) => {
    return sequelize.define('member', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        club_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'club',
                key: 'id',
            },
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        role: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        introduction: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        profile:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
    });
};
module.exports = Member
