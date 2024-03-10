const {DataTypes}=require('sequelize')

const Schedule=(sequelize)=>{
    return sequelize.define('schedule',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        place:{
            type:DataTypes.STRING(20),
            alllowNull:false,
        },
        start:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        end:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING(500),
            allowNull:false,
        },
    });
};
module.exports=Schedule;