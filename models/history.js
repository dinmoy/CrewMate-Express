const {DataTypes}=require('sequelize');

const History=(sequelize)=>{
    return sequelize.define('history',{
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
        date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        thumbnail:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
    });
};
module.exports=History;
