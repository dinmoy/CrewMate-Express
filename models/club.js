const {DataTypes}=require('sequelize')

const Club=(sequelize)=>{
    return sequelize.define('club',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        introduction:{
            type:DataTypes.STRING(55),
            allowNull:false,
        },
        profile:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
    });
};
module.exports=Club