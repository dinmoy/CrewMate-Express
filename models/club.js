const {DataTyppes}=require('sequelize')

const Club=(sequelize)=>{
    return sequelize.define('club',{
        id: {
            type: DataTypes.INTEGER,
            PrimaryKey: true,
            AutoIncrement: true,
            allowNull: true,
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            reference:{
                model:'user',
                key:'id',
            },
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        intoriduction:{
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