const { DataTypes } = require('sequelize')

const Member = (sequelize) => {
    return sequelize.define('member', {
        id: {
            type: DataTypes.INTEGER,
            PrimaryKey: true,
            AutoIncrement: true,
            allowNull: true,
        },
        club_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'club',
                key: 'id',
            },
        },
        role: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        introduction: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    });
};
module.exports = Member
